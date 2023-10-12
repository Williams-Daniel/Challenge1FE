import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/dummy-prod-1.jpg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterUser } from "../../Apis/AuthApi";
import { useState } from "react";

const Register = () => {
  const [avatar, setAvatar] = useState<string>(img);
  const [image, setImage] = useState<string>("");

  const onHandleImage = (el: any) => {
    const localImage = el.target.files[0];
    const saveImage = URL.createObjectURL(localImage);
    setAvatar(saveImage);
    setImage(localImage);
  };

  const navigate = useNavigate();

  const model = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onSubmit = handleSubmit(async (data: any) => {
    const { name, email, password } = data;
    console.log("first",data)

    const formData = new FormData();

    formData.append("Familyname", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar",image)

    RegisterUser(formData).then((res) => {
      console.log("sec", res)
      navigate("/signin");
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
            text-[30px]
            font-[700]
            text-[#FF735C]
            "
        >
          Register
        </div>
        <div
          className="
            flex 
            flex-col
            justify-center
            items-center
            "
        >
          <img
            className="
                w-[100px]
                h-[100px]
                rounded-[50%]
                border-[1px]
                object-cover
                "
            src={avatar}
          />
          <label
            className="
                py-[6px]
                px-[10px]
                bg-[#FF735C]
                text-white
                text-[14px]
                font-[500]
                rounded-[5px]
                mt-1
                hover:scale-[1.02]
                hover:transition-all
                duration-300
                hover:cursor-pointer
                "
            htmlFor="image"
          >
            Upload Image
          </label>
          <input
            className="
                hidden
                "
            type="file"
            placeholder="image"
            id="image"
            accept="image/png, image/jpg, image/jpeg"
            onChange={onHandleImage}
          />
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
            name
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
            placeholder="Williams Daniel"
            {...register("name")}
          />
          {errors.name?.message && 
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
            Confirm password
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
            {...register("confirm")}
          />
          {errors.confirm?.message && 
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
          Register
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
            <Link to="/signin">
              <div
                className="
            text-[14px]
            text-[#9CA3AF]
            ml-1
            "
              >
                Sign-in.
              </div>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
