// 함수의 파라미터에 타입을 정의하는 방식
const sum=(a: number, b: number)=>{
    return a + b;
}
sum(10,20);

//함수의 반환 값에 타입을 정의하는 방식
const add = (a: number, b: number): number => {
    return a + b;
}
sum(10, 20);

// 함수의 옵셔널 파라미터 => ?를 붙으면 파라미터를 선택적으로 사용 가능
const log = (a: string, b?: string, c?: string) => {

}

log('hello world');
log('hello ts', 'abc');

