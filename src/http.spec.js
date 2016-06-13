"use strict";
var http_1 = require('@angular/http');
var testing_1 = require('@angular/http/testing');
var testing_2 = require('@angular/core/testing');
var nanadal_1 = require('./nanadal');
console.log('mod');
testing_2.describe('MockBackend: TestService', function () {
    testing_2.beforeEachProviders(function () { return [
        nanadal_1.NanaDal,
        testing_1.MockBackend,
        http_1.BaseRequestOptions,
        {
            provide: http_1.Http,
            useFactory: function (backend, options) { return new http_1.Http(backend, options); },
            deps: [testing_1.MockBackend, http_1.BaseRequestOptions]
        }]; });
    /*it('should return response when subscribed to getItems', () => {
        let injector = ReflectiveInjector.resolveAndCreate([
            MockBackend, BaseRequestOptions,
            provide(Http, {
                useFactory: (backend, options) => {
                    return new Http(backend, options);
                }, deps: [MockBackend, BaseRequestOptions]
            }),
            provide(NanaDal, {
                useFactory: (http: Http) => {
                    return new NanaDal(http);
                },
                deps: [Http]
            }),
        ]);
        let backEnd: MockBackend = injector.get(MockBackend);

        backEnd.connections.subscribe((data: MockConnection) => {
            expect(data.request.url).toContain('service/126');
            data.mockRespond(new Response(new ResponseOptions({ body: { NavigateID: 21, NavigateName: 'name1' } })));
        });

        let testService: NanaDal = injector.get(NanaDal);

        expect(testService instanceof (NanaDal)).toBe(true);
        //expect(NanaDal.getInstance()).toEqual(testService);
        //testService.setFactory('service', 126);

        testService.getItems().subscribe((res: Navigation) => {
            expect(res).toEqual({ NavigateID: 1, NavigateName: 'name1' });
        });
    });*/
    testing_2.it('returns the items', testing_2.async(testing_2.inject([nanadal_1.NanaDal, testing_1.MockBackend], function (nanaDal, mockBackEnd) {
        mockBackEnd.connections.subscribe(function (connection) {
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: JSON.stringify({ id: 666 }) })));
        });
        return nanaDal.getItems().subscribe(function (data) {
            testing_2.expect(data).toEqual({ id: 666 });
        });
    })));
});
//# sourceMappingURL=http.spec.js.map