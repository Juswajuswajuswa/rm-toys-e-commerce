import { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";

import app from "../firebase/firebase";

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import { useUserStore } from "../stores/useUserStore";
import { CiEdit } from "react-icons/ci";
import axiosInstance from "../lib/axios";
import toast from "react-hot-toast";

export default function ChangeInfoComponent() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileError, setFileError] = useState(false);

  console.log(uploadProgress)


  const currentUser = useUserStore((state) => state.currentUser);
  const setCurrentUser = useUserStore((state) => state.setCurrentUser);
  console.log(currentUser);

  const fileRef = useRef(null);

  const { mutate: updateProfile } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosInstance.post(
        `/user/update/${currentUser._id}`,
        data
      );
      return res.data;
    },
    onSuccess: (data) => {
      console.log(data);
      setCurrentUser(data);
      toast.success("Profile Updated Successfully");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    const { username, email, password, phoneNumber } = inputs;

    try {
      updateProfile({
        username,
        email,
        password,
        avatar: imageUrl ? imageUrl : currentUser.avatar,
        phoneNumber,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // handleuploadImage

  useEffect(() => {
    if (file) {
      handleProfilePhotoUpload(file);
    }
  }, [file]);

  const handleProfilePhotoUpload = (file) => {
    setFileError("");
    setUploadProgress(0);

    if (!file) {
      console.log("file did not exist");
    }

    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        const rounded = Math.round(progress);
        setUploadProgress(rounded);
      },
      (error) => {
        setFileError(true);
        console.log("Upload failed", error);
        toast.error(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setFileError(false);
          toast.success(`Avatar uploaded`)
          setImageUrl(downloadUrl);
        });
      }
    );
  };

  return (
    <div>
      <h1 className="text-xl">CHANGE INFORMATION</h1>
      <form onSubmit={handleFormSubmit} className="my-5 flex flex-col gap-10 ">
        <div className="flex flex-col items-center gap-4 justify-center">
          <p>AVATAR</p>
          <input
            hidden
            type="file"
            ref={fileRef}
            accept="image/.*"
            onChange={(e) => setFile(e.target.files[0])}
            name="image"
          />
          <img
            src={currentUser.avatar}
            alt="avatar.img"
            className="w-[150px] h-[150px] rounded-full border border-black object-cover"
          />
          <button
            type="button"
            onClick={() => fileRef.current.click()}
            className="bg-primary uppercase text-card px-2 py-1 rounded-[5px]"
          >
            Change Avatar
          </button>
        </div>

        <div className="flex flex-col gap-5 w-[90%] md:w-[70%] mx-auto uppercase">
          <div className="flex flex-col md:flex-row md:items-center my-2 justify-between text-md md:text-lg ">
            <h1 className="my-5">PERSONAL INFORMATION</h1>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <div className="flex  w-full gap-[10px] flex-col">
                <label htmlFor="email">Email: </label>
                <div className="flex items-center  justify-between gap-5">
                  <input
                    type="email"
                    name="email"
                    defaultValue={currentUser.email}
                    id="email"
                    className="border border-black px-5 py-2 w-[85%] bg-gray-200 rounded-[5px] outline-none"
                  />
                  <button type="button">
                    <CiEdit size={35} className="text-primary" />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex  w-full gap-[10px] flex-col">
                <label htmlFor="username">username: </label>
                <div className="flex items-center  justify-between gap-5">
                  <input
                    type="text"
                    name="username"
                    defaultValue={currentUser.username}
                    id="username"
                    className="border border-black px-5 py-2 w-[85%] bg-gray-200 rounded-[5px] outline-none"
                  />
                  <button type="button">
                    <CiEdit size={35} className="text-primary" />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex  w-full gap-[10px] flex-col">
                <label htmlFor="password">password: </label>
                <div className="flex items-center  justify-between gap-5">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    id="password"
                    className="border border-black px-5 py-2 w-[85%] bg-gray-200 rounded-[5px] outline-none"
                  />
                  <button type="button">
                    <CiEdit size={35} className="text-primary" />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex  w-full gap-[10px] flex-col">
                <label htmlFor="phoneNum">phone number: </label>
                <div className="flex items-center  justify-between gap-5">
                  <input
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="phone number"
                    defaultValue={currentUser.phoneNumber}
                    className="border border-black px-5 py-2 w-[85%] bg-gray-200 rounded-[5px] outline-none"
                  />
                  <button type="button">
                    <CiEdit size={35} className="text-primary" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="hover:opacity-95 uppercase flex items-center gap-5 px-5 border-black p-2 rounded-[5px] bg-primary text-card">
            UPDATE
            <FaCheckCircle size={15} />
          </button>
        </div>
      </form>
    </div>
  );
}
