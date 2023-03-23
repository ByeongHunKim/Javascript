## 1_default_data_type - 기본 자료형

### 원시타입

- boolean
- null
  - 의도적으로 변수에 값이 없다는 것을 명시할 때 사용
- undefined
  - 선언 이후 값을 할당하지 않은 변수
  - 존재하지 않는 객체 프로퍼티에 접근한 경우
- number
- string
- symbol

### 객체타입 (object/reference type)

- object

```
{
  키:값
}

let obj = { a: 1, b: 2}
```

## 2_array_and_object - 배열 객체

### 배열

- 배열은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용한다
- javascript의 배열은 객체이며 다양한 내장 메소드를 포함하고 있다

## 3_conditional_statement - 조건문

### 블록(block)문

### 조건문 (conditional statement)

- 주어진 조건식(conditional expression) 의 평가 결과에 따라 블록문의 실행을 결정한다
- 조건식은 boolean 값으로 평가될 수 있는 표현식

## 4_function - 함수

- 함수는 이름과 매개변수를 갖으며 필요한 때에 호출하여 코드 블록에 담긴 문들을 일괄적으로 실행

## 5_for_loop - 반복문

- 반복문은 주어진 조건식의 평가 결과가 참인 경우 코드 블록을 실행하고 다시 반복하여 검사할 때, 조건식이 참인 경우 코드 블록을 다시 실행한다.
  - 이는 조건식이 거짓일 때 까지 반복하는 구문이다

### for 문

### 이중 for문

### while문

### do while문

### break문

### continue문

## 6_let_and_const - let & const

- 기존에는 var 키워드로 변수와 상수를 모두 정의하였다
- let은 변수, const는 상수를 의미한다

## 7_arrow_function - 화살표 함수

- 화살표함수(arrow function)는 function 키워드 대신 화살표(=>) 를 사용하여 보다 간략한 방법으로 함수를 선언할 수 있다

## 8_class - 클래스

- ES6에서는 class라는 키워드가 새로 추가 되었다
  - 좀 더 클래스스럽게 보여지게 되었다.
  - 생성자와 상속을 더 간단하고 명확한 구문으로 다룰 수 있다
  - 클래스 자신도 함수이다. 생성자로 함수를 생성하는 새로운 구문이다.

## 9_destructuring - 디스트럭처링

- 배열 또는 객체를 개별 변수에 할당하는 것을 말한다
- json 형태의 객체를 쉽게 매핑해서 변수에 할당할 수 있고, 반환값도 여러개를 한번에 설정할 수 있다

## 10_spread_and_rest - spread, rest 연산자
