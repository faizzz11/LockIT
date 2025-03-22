import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

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
  const passRef = useRef();

  const showPassword = () => {
    if (ref.current.src.includes("/icons/eyecross.png")) {
      ref.current.src = "/icons/eye.png";

      passRef.current.type = "password";
    } else {
      ref.current.src = "/icons/eyecross.png";
      passRef.current.type = "text";
    }
  };

  const savePass = () => {

    if(Form.site.length >4 && Form.username.length >3 &&Form.pass.length >4){
    const newEntry = { ...Form, id: uuidv4() };
    const updatedPassArr = [...PassArr, newEntry];
    setPassArr(updatedPassArr);
    localStorage.setItem("passwords", JSON.stringify(updatedPassArr));
    console.log(updatedPassArr);
    setForm({ site: "", username: "", pass: "" });
    toast("Details Saved!!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  } else{
    toast('Error: Insufficient Characters');
  }
  };

  const DltPass = (id) => {
    console.log("Deleting password with id ", id);
    let c = confirm("Sahi Mei Delete Kardu Na???");
    if (c) {
      setPassArr(PassArr.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(PassArr.filter((item) => item.id !== id))
      );
      toast("Kar Diya Deleteee!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const EditPass = (id) => {
    console.log("Editing password with id ", id);
    setForm(PassArr.filter((i) => i.id === id)[0]);
    setPassArr(PassArr.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast("copied To clipboarddd!!!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    <div className="px-5 pt-14 mb-25">
      <div className="manager bg-purple-50 mycontainer rounded-md max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
        <h1 className="text-center font-bold tracking-wide text-[#840cca] text-2xl sm:text-3xl md:text-4xl">
          Lock
          <span className="text-[#16052a] text-[gradient-to-br from-[#840cca] to-[#4514a0]]">
            IT
          </span>
        </h1>
        <p className="text-[#840cca] text-base sm:text-lg text-center font-[McLaren]">
          Your Own Password Diary
        </p>

        <div className="text-black flex flex-col p-2 sm:p-4 gap-4 sm:gap-7 items-center">
          <input
            value={Form.site}
            onChange={handleChange}
            className="border border-[#840cca] rounded-full w-full p-2 sm:p-4 py-1"
            placeholder="Enter Website URL"
            type="text"
            name="site"
            id=""
          />

<div className="flex flex-col sm:flex-row w-full justify-between gap-4 sm:gap-7">
  <input
    value={Form.username}
    onChange={handleChange}
    className="border border-[#840cca] rounded-full w-full sm:flex-[2] p-2 sm:p-4 py-1"
    placeholder="Enter Username"
    type="text"
    name="username"
    id=""
  />

  <div className="relative w-full sm:flex-[1]">
    <input
      ref={passRef}
      value={Form.pass}
      onChange={handleChange}
      className="border border-[#840cca] rounded-full w-full p-2 sm:p-4 py-1"
      placeholder="Enter Password"
      type="password"
      name="pass"
      id=""
    />
    <span
      className="absolute right-[3px] top-1/2 transform -translate-y-1/2 cursor-pointer"
      onClick={showPassword}
    >
      <img
        ref={ref}
        className="p-1"
        width={46}
        src="/icons/eye.png"
        alt="eye"
      />
    </span>
  </div>
</div>

          <button
            onClick={savePass}
            className="flex hover:text-white justify-center items-center hover:bg-purple-600 gap-2 px-6 sm:px-8 py-1 sm:py-2 w-fit rounded-full bg-[#840cca] cursor-pointer border-[2px] border-purple-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save
          </button>
        </div>
        <div className="passwords overflow-x-auto">
          <h2 className="font-bold font-[McLaren] text-xl sm:text-2xl py-3">Your Saved Passwords</h2>
          {PassArr.length === 0 && <div>Add Some Password To View</div>}

          {PassArr.length != 0 && (
            <table className="table-auto w-full overflow-hidden rounded-lg text-xs sm:text-sm md:text-base">
              <thead className="bg-[#840cca] text-white">
                <tr>
                  <th className="py-1 sm:py-2 px-1 sm:px-2">WebSite</th>
                  <th className="py-1 sm:py-2 px-1 sm:px-2">UserName</th>
                  <th className="py-1 sm:py-2 px-1 sm:px-2">Password</th>
                  <th className="py-1 sm:py-2 px-1 sm:px-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-purple-200">
                {PassArr.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-1 sm:py-2 border border-white text-center px-1 sm:px-2 truncate max-w-[100px] sm:max-w-none">
                        <div className="flex items-center justify-center">
                          <a href={item.site} target="_blank" className="truncate">
                            {item.site}
                          </a>
                          <div
                            className="lordiconcopy size-7 cursor-pointer hidden md:block"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "4px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-1 sm:py-2 border border-white text-center px-1 sm:px-2 truncate max-w-[80px] sm:max-w-none">
                        <div className="flex items-center justify-center">
                          <span className="truncate">{item.username}</span>
                          <div
                            className="lordiconcopy size-7 cursor-pointer hidden md:block"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "4px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-1 sm:py-2 border border-white text-center px-1 sm:px-2 truncate max-w-[80px] sm:max-w-none">
                        <div className="flex items-center justify-center">
                          <span className="truncate">{item.pass}</span>
                          <div
                            className="lordiconcopy size-7 cursor-pointer hidden md:block"
                            onClick={() => {
                              copyText(item.pass);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "4px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>

                      <td className="justify-center py-1 sm:py-2 border border-white text-center px-1 sm:px-2">
                        <span
                          className="cursor-pointer mx-2"
                          onClick={() => {
                            EditPass(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                        <span
                          className="cursor-pointer mx-2"
                          onClick={() => {
                            DltPass(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        <div className="h-[100px] block md:hidden"></div>
      </div>
    </div>
    </>
  );
};

export default Manager;
