import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUserIn } from "../../Apis/AuthApi";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Global/GlobalState";

const SignIn = () => {
 
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const model = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onSubmit = handleSubmit(async (data: any) => {
    const { email, password } = data;
    


    SignUserIn({email,password}).then((res) => {
      dispatch(registerUser(res))
      navigate("/");
    });
  });

  return (
    <div
      className="
    w-full
    h-[100vh]
    flex
    justify-center
    items-center
    bg-white
    "
    >
      <form
        className="
        w-[350px]
        h-[600px]
        rounded-[5px]
        flex
        flex-col
        justify-center
        items-center
        border-[2px]
        border-[#9CA3AF]
        "
        onSubmit={onSubmit}
      >
        <div
          className="
            text-[25px]
            font-[700]
            text-[#FF735C]
            mb-[10px]
            "
        >
         Welcome back...!!<br/> Login
        </div>

       
        <div
          className="
            flex
            flex-col
            mt-1
            mb-1
            "
        >
          <label
            className="
                text-[14px]
                font-light
                text-[#9CA3AF]
                "
          >
            email
          </label>
          <input
            className="
                w-[270px]
                h-[35px]
                rounded-[5px]
                placeholder:text-[13px]
                pl-[10px]
                border-[#9CA3AF]
                border-[2px]
                "
            placeholder="wills@gmail.com"
            {...register("email")}
          />
          {errors.email?.message && 
            <label
              className="
                text-[10px]
                text-[red]
                font-[500]
                
                "
            >
              please fill this field
            </label>
          }
        </div>

        <div
          className="
            flex
            flex-col
            mt-1
            mb-1
            "
        >
          <label
            className="
                text-[14px]
                font-light
                text-[#9CA3AF]
                "
          >
            password
          </label>
          <input
            className="
                w-[270px]
                h-[35px]
                rounded-[5px]
                placeholder:text-[13px]
                pl-[10px]
                border-[#9CA3AF]
                border-[2px]
                "
            placeholder="mypassword$$%%"
            {...register("password")}
          />
          {errors.password?.message && 
            <label
              className="
                text-[10px]
                text-[red]
                font-[500]
                
                "
            >
              please fill this field
            </label>
          }
        </div>

        

        <button
          className="
            w-[270px]
            h-[35px]
            bg-[#FF735C]
            text-white
            text-[14px]
            font-[500]
            rounded-[5px]
            mt-3
            hover:scale-[1.02]
            hover:transition-all
            hover:cursor-pointer
            duration-300
            "
          type="submit"
        >
          Log in
        </button>

        <div
          className="
            w-[100%]
            flex
            flex-col
            items-center
            justify-center
            "
        >
          <hr
            className="
                     w-[200px]
                     border-[1px]
                     border-white
                     mrl-1
                     mt-3
                     "
          />
          <div
            className="
          flex
          mt-2
          "
          >
            <div
              className="
            text-[14px]
            text-[#9CA3AF]
            "
            >
              Already have an account?
            </div>
            <Link to="/register">
              <div
                className="
            text-[14px]
            text-[#9CA3AF]
            ml-1
            "
              >
                Register.
              </div>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
