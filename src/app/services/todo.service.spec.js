"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var todo_service_1 = require("./todo.service");
describe('TodoService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(todo_service_1.TodoService);
        expect(service).toBeTruthy();
    });
});
