import React, { useEffect } from 'react'
import useStateRef from 'react-usestateref';
import { ApiContext } from './ApiContext';
import { fetchData } from '../../api/api';
import { CardFieldsObject, FilterConfigProps, StyleProps } from '../../interfaces/interface';

interface WrapperProps {
    hostname: string;
    DefaultChannel: {
        url: string;
        method: string;
        cache: "default" | "no-store" | "reload" | "force-cache" | "only-if-cached" | "no-cache";
        header: object
    }
    GetChannel: {
        method: string;
        cache: "default" | "no-store" | "reload" | "force-cache" | "only-if-cached" | "no-cache";
        header: object
    }
    SearchAPI: {
        url: string;
        headers: object;
        method: string,
        body: string
    }
    TermsRead: {
        url: string;
        headers: object;
        method: string,
        body: string
    }
    children?: React.ReactNode;
    Formurl: string;
    CardFieldsProps: CardFieldsObject;
    cache:
    | 'default'
    | 'no-store'
    | 'reload'
    | 'force-cache'
    | 'only-if-cached'
    | 'no-cache';
    styles?: StyleProps;
    filterConfig: Array<FilterConfigProps>;
    addtionalFilterConfig?: Array<FilterConfigProps> | undefined;
    TermsAPI: {
        url: string;
        method: string;
        headers?: object;
        body?: string;
    };
    Frameworks: Array<string>;
}

const Wrapper = ({ hostname, DefaultChannel, GetChannel, cache, SearchAPI, TermsRead, children, Formurl, CardFieldsProps, styles, filterConfig, addtionalFilterConfig }: WrapperProps) => {
    const [defaultChannel, setdefaultChannel, defaultChannelRef] = useStateRef<string>("");
    const [frameWorksArray, setFrameWorksArray, frameWorksArrayRef] = useStateRef<Array<any>>([""]);
    if (false) {
        defaultChannel
        frameWorksArray
    }
    useEffect(() => {
        fetchData({
            url: DefaultChannel.url,
            method: DefaultChannel.method,
            headers: DefaultChannel.header,
            cache: DefaultChannel.cache,
        }).then((res) => {
            setdefaultChannel(res.result.response.value);
            GetChannelFrameworks();
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

    function GetChannelFrameworks() {
        fetchData({
            url: `${hostname}/api/channel/v1/read/${defaultChannelRef.current}`,
            method: GetChannel.method,
            headers: GetChannel.header,
            cache: GetChannel.cache,
        }).then((res) => {
            setFrameWorksArray(res.result.channel.frameworks);
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <ApiContext
                Frameworks={frameWorksArrayRef.current}
                Formurl={Formurl}
                SearchAPI={{
                    url: SearchAPI.url,
                    headers: SearchAPI.headers,
                    body: SearchAPI.body,
                    method: SearchAPI.method
                }}
                TermsAPI={{
                    url: TermsRead.url,
                    headers: TermsRead.headers,
                    method: TermsRead.method
                }}
                hostname={hostname}
                filterConfig={filterConfig}
                children={children}
                cache={cache === undefined ? "default" : cache}
                styles={styles}
                CardFieldsProps={CardFieldsProps}
                addtionalFilterConfig={addtionalFilterConfig}
            />
        </div>
    )
}

export default Wrapper
