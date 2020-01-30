"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent() {
    }
    TodoItemComponent.prototype.ngOnInit = function () {
    };
    // Set Dynamic Classes
    TodoItemComponent.prototype.setClasses = function () {
        var classes = {
            todo: true,
            'is-complete': this.todo.completed
        };
        return classes;
    };
    TodoItemComponent.prototype.onToggle = function (todo) {
        todo.completed = !todo.completed;
    };
    TodoItemComponent.prototype.onDelete = function (todo) {
        this.todos.splice(this.id - 1, 1);
    };
    __decorate([
        core_1.Input()
    ], TodoItemComponent.prototype, "todo", void 0);
    __decorate([
        core_1.Input()
    ], TodoItemComponent.prototype, "todos", void 0);
    __decorate([
        core_1.Input()
    ], TodoItemComponent.prototype, "id", void 0);
    TodoItemComponent = __decorate([
        core_1.Component({
            selector: 'app-todo-item',
            templateUrl: './todo-item.component.html',
            styleUrls: ['./todo-item.component.css']
        })
    ], TodoItemComponent);
    return TodoItemComponent;
}());
exports.TodoItemComponent = TodoItemComponent;
