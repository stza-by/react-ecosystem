import {expect} from 'chai';
import {todos} from "../reducer";

describe('The todos reducer', () => {

    it('NEW_TODO_CREATED', () => {
        const fakeTodo = {
            id: 1,
            text: 'example',
        }
        const action = {
            type: 'NEW_TODO_CREATED',
            payload: { todo:fakeTodo }
        };

        const expectedState = {
            isLoading: false,
            data: [fakeTodo]
        }

        const result = todos(undefined, action);
        expect(result).to.deep.equal(expectedState);
    });
})
