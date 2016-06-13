import { BaseRequestOptions, Response, ResponseOptions, Http} from '@angular/http';
import {provide, ReflectiveInjector} from '@angular/core';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {it, inject, async, describe, beforeEachProviders, expect} from '@angular/core/testing';

import {NanaDal} from './nanadal';

console.log('mod');

describe('MockBackend: TestService', () => {
    beforeEachProviders(() => [
        NanaDal,
        MockBackend,
        BaseRequestOptions,
        {
            provide: Http,
            useFactory: (backend, options) => new Http(backend, options),
            deps: [MockBackend, BaseRequestOptions]
        }]
    );

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
    it('returns the items', async(inject([NanaDal, MockBackend], (nanaDal: NanaDal, mockBackEnd: MockBackend) => {
        mockBackEnd.connections.subscribe((connection: MockConnection) => {
            connection.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ id: 666 }) })));
        });

        return nanaDal.getItems().subscribe((data) => {
            expect(data).toEqual({ id: 666 });
        });
    })));
});