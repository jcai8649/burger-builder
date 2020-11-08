import {put} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from '../../axios-order';

export function* initIngredientsSaga() {
    try{
        const response = yield axios.get('https://burger-builder-633ea.firebaseio.com/ingredients.json');
        yield put(actions.setIngredients(response.data));
    } catch {
        yield put(actions.fetchIngredientsFailed());
    }
}