import { __awaiter } from "tslib";
export const fetchData = ({ headers, body, url, method, cache, }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url, {
        headers: headers,
        body: body,
        method: method === undefined || method === null ? 'GET' : method,
        cache: cache,
    });
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    return response.json();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZmlsdGVyaW5nL3NyYy9saWIvRnVuY3Rpb25zL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLENBQU8sRUFDOUIsT0FBTyxFQUNQLElBQUksRUFDSixHQUFHLEVBQ0gsTUFBTSxFQUNOLEtBQUssR0FDSSxFQUFnQixFQUFFO0lBQzNCLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNoQyxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUNoRSxLQUFLLEVBQUUsS0FBSztLQUNiLENBQUMsQ0FBQztJQUNILElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUMxQztJQUVELE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pCLENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBpUHJvcHMgfSBmcm9tICcuLi9JbnRlcmZhY2VzL1NlcnZpY2VfRnVuY3Rpb25fSW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHtcclxuICBoZWFkZXJzLFxyXG4gIGJvZHksXHJcbiAgdXJsLFxyXG4gIG1ldGhvZCxcclxuICBjYWNoZSxcclxufTogYXBpUHJvcHMpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgYm9keTogYm9keSxcclxuICAgIG1ldGhvZDogbWV0aG9kID09PSB1bmRlZmluZWQgfHwgbWV0aG9kID09PSBudWxsID8gJ0dFVCcgOiBtZXRob2QsXHJcbiAgICBjYWNoZTogY2FjaGUsXHJcbiAgfSk7XHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZyEnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn07XHJcbiJdfQ==