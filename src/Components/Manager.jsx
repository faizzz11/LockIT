import React from "react";
import { useRef, useState, useEffect } from "react";

const Manager = () => {
  const [Form, setForm] = useState({ site: "", username: "", pass: "" });
  const [PassArr, setPassArr] = useState([]);
  useEffect(() => {
    let Passwords = localStorage.getItem("passwords");
    if (Passwords) {
      setPassArr(JSON.parse(Passwords));
    }
  }, []);

  const ref = useRef();
  const showPassword = () => {
    if (ref.current.src.includes("/icons/eyecross.png")) {
      ref.current.src = "/icons/eye.png";
    } else {
      ref.current.src = "/icons/eyecross.png";
    }
  };

  const savePass = () => {
    console.log(Form);
    setPassArr([...PassArr, Form]);
    localStorage.setItem("passwords", JSON.stringify([...PassArr, Form]));
    console.log([...PassArr, Form]);
  };

  const handleChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className=" bg-slate-100 mycontainer">
        <h1 className="text-center font-bold tracking-wide text-[#840cca] text-4xl">
          Lock
          <span className="text-[#16052a] text-[gradient-to-br from-[#840cca] to-[#4514a0]]">
            IT
          </span>
        </h1>
        <p className="text-[#840cca] text-lg text-center">
          Your Own Password Diary
        </p>

        <div className="text-black flex flex-col p-4 gap-7 items-center">
          <input
            value={Form.site}
            onChange={handleChange}
            className="border border-[#840cca]  rounded-full w-full p-4 py-1"
            placeholder="Enter Website URL"
            type="text"
            name="site"
            id=""
          />

          <div className="flex w-full justify-between gap-7">
            <input
              value={Form.username}
              onChange={handleChange}
              className="border border-[#840cca] rounded-full w-full p-4 py-1"
              placeholder="Enter Username"
              type="text"
              name="username"
              id=""
            />

            <div className="relative">
              <input
                value={Form.pass}
                onChange={handleChange}
                className="border border-[#840cca] rounded-full w-full p-4 py-1"
                placeholder="Enter Password"
                type="text"
                name="pass"
                id=""
              />
              <span
                className="absolute right-[3px] top-[3px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={28}
                  src="/icons/eye.png"
                  alt="eye"
                />
              </span>
            </div>
          </div>

          <button
            onClick={savePass}
            className="flex hover:text-white justify-center items-center hover:bg-purple-600 gap-2 px-8 py-2 w-fit rounded-full bg-[#840cca] cursor-pointer border-[2px] border-purple-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-3">Your Saved Passwords</h2>
          {PassArr.length === 0 && <div>Add Some Password To View</div>}

          {PassArr.length != 0 &&<table className="table-auto w-full overflow-hidden rounded-lg">
            <thead className="bg-[#840cca] text-white">
              <tr>
                  <th className="py-2">WebSite</th>
                  <th className="py-2">UserName</th>
                  <th className="py-2">Password</th>
              </tr>
            </thead>
            <tbody className="bg-purple-200">
              {PassArr.map((item,index) => {
                return <tr key={index}>
                <td className="py-2 border border-white text-center w-34"><a href={item.site} target="_blank">{item.site}</a></td>
                <td className="py-2 border border-white text-center w-34">{item.username}</td>
                <td className="py-2 border border-white text-center w-34">{item.pass}</td>
              </tr>
              })}
              
             
            </tbody>
          </table>}
        </div>
      </div>
    </>
  );
};

export default Manager;
