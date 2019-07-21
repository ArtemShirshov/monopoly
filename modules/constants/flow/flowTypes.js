// @flow
import type {ReducersType} from 'reducers/index';

// eslint-disable-next-line flowtype/type-id-match
type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
export type ApplicationStoreType = $ObjMap<ReducersType, $ExtractFunctionReturn>;
export type ActionCreatorType<V> = $Call<$ExtractFunctionReturn, V>;
export type VoidFunctionType<T1 = void, T2 = void, T3 = void> = (
    arg1: T1,
    arg2: T2,
    arg3: T3,
) => void;

export type ActionType<Payload = any, Meta = any> = {
    type: string,
    payload: Payload,
    meta?: Meta,
    error?: boolean,
};
