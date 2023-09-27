import { useState } from "react";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";

const Container = tw.div`
    bg-white text-left w-[400px] h-[180px] mx-auto p-5 absolute top-[280px] inset-x-0
    rounded-xl flex justify-center items-center flex-col z-99
`;

const TheInput = tw.input`
w-1/2 h-8 rouded-xl border border-white border-b-1 bg-transparent
`;
const InputLabel = tw.div`
w-1/2 text-left mx-auto text-white
`;
const WrongMessage = tw.div`
  text-red-500 text-left w-1/2
  mx-auto
`;
const CorMessage = tw.div`
 text-green-500 text-left w-1/2
 mx-auto
`;

function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSame, setIsSame] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSubmit(true);
    data.password === data.passwordCheck ? setIsSame(true) : setIsSame(false);
    setIsModal((prev) => !prev);
  };

  const handlClose = () => {
    setIsModal((prev) => !prev);
  };
  console.log(isModal);

  return (
    <div className="z-30">
      <div className="bg-sky-50 mx-auto my-10 text-center bg-opacity-70 w-1/2 rounded-lg h-3/4">
        <h1 className="text-[35px] font-bold py-6 border-b-2 mx-10">
          회원가입
        </h1>
        <form
          className="flex flex-col items-center my-5 justify-around"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputLabel>이름</InputLabel>
          <TheInput
            {...register("userName", {
              required: true,
            })}
          />
          {errors.userName && (
            <WrongMessage>이 항목은 필수입니다.</WrongMessage>
          )}
          {isSubmit ? (
            <CorMessage>{errors.userName ? "" : "멋진 이름이군요!"}</CorMessage>
          ) : (
            <CorMessage></CorMessage>
          )}

          <InputLabel>닉네임</InputLabel>
          <TheInput
            {...register("nickName", {
              required: true,
              minLength: 2,
              maxLength: 5,
            })}
          ></TheInput>
          {errors.nickName && (
            <WrongMessage>닉네임은 2~5글자로 설정해주세요</WrongMessage>
          )}
          {isSubmit ? (
            <CorMessage>
              {errors.nickName ? "" : "멋진 닉네임이군요!"}
            </CorMessage>
          ) : (
            <CorMessage></CorMessage>
          )}

          <InputLabel>아이디</InputLabel>
          <TheInput
            type="text"
            name="email"
            {...register("id", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          ></TheInput>
          {errors.id && <WrongMessage>이메일 형식이 아닙니다.</WrongMessage>}
          {isSubmit ? (
            <CorMessage>
              {errors.id ? "" : "올바른 메일 형식입니다."}
            </CorMessage>
          ) : (
            <CorMessage></CorMessage>
          )}

          <InputLabel>비밀번호</InputLabel>
          <TheInput
            type="password"
            {...register("password", {
              required: true,
              pattern: {
                value:
                  /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/,
              },
            })}
          ></TheInput>
          {errors.password && (
            <WrongMessage>
              영어+숫자+특수문자를 조합하여 작성해주세요.
            </WrongMessage>
          )}
          {isSubmit ? (
            <CorMessage>
              {errors.password ? "" : "안전한 비밀번호입니다!"}
            </CorMessage>
          ) : (
            <CorMessage></CorMessage>
          )}

          <InputLabel>비밀번호 확인</InputLabel>
          <TheInput
            type="password"
            {...register("passwordCheck", {
              required: true,
              pattern: {
                value:
                  /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/,
              },
            })}
          ></TheInput>
          {errors.passwordCheck && (
            <WrongMessage>비밀번호가 다릅니다.</WrongMessage>
          )}
          {isSame ? (
            <CorMessage>
              {errors.passwordCheck ? "" : "비밀번호가 일치합니다."}
            </CorMessage>
          ) : (
            <WrongMessage></WrongMessage>
          )}

          <button
            type="submit"
            className="bg-gray-800 text-white w-1/2 py-4 my-5 rounded-lg text-[20px]"
          >
            가입하기
          </button>
        </form>
      </div>

      {isModal ? (
        <div>
          <div
            onClick={handlClose}
            className="fixed inset-x-0 inset-y-0 border z-1 bg-black opacity-70 w-[100%] h-[100vh]"
          ></div>
          <Container>
            <div className="flex flex-col items-center">
              <span className="text-[40px] font-bold">가입 성공!</span>
              <div>UMC 챌린저 가입을 축하합니다!!</div>
            </div>
            <button
              onClick={handlClose}
              className="bg-gray-300 p-1 rounded-lg self-end cursor-pointer"
            >
              닫기
            </button>
          </Container>
        </div>
      ) : null}
    </div>
  );
}

export default App;
