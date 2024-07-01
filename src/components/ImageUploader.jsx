import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Flex, message, Upload } from "antd";
import { storage } from "../services/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

function ImageUploader(props) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleUpload = (file) => {
    setLoading(true);
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Optional: Handle progress updates
      },
      (error) => {
        message.error("Upload failed");
        setLoading(false);
      },
      () => {
        // Get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setLoading(false);
          setImageUrl(downloadURL);
          message.success("Upload successful");
          props.onImageUpload(downloadURL);
        });
      }
    );
  };

  const handleChange = ({ file }) => {
    if (beforeUpload(file)) {
      handleUpload(file);
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <Flex gap="middle" wrap>
      <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        customRequest={({ file, onSuccess }) => {
          handleUpload(file);
          onSuccess("ok");
        }}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensures the image is not distorted
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </Flex>
  );
}

export default ImageUploader;
