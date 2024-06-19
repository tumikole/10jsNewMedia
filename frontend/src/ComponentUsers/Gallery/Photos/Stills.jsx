import React, { useState, useEffect } from "react";
import "./Stills.css";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function Stills({ /*stills*/ itemLength, getAllStills }) {
  const [modalContent, setModalContent] = useState("");
  const [images, setImages] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const stills = [
    {
      folderName: "folder1",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEX9pl8af7Y7nzBN_8gY3XmGZKCzkUOqRcod9oXuBf4g&s",
    },
    {
      folderName: "folder1",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_xuRKDZMCnjKUSisk2P3pBoH1AY-xNGO5BPEyrxKiQ&s",
    },
    {
      folderName: "folder1",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNp5cdaIatjCHPZfk5xC3CqZFjq7znBp7uWfgM6ZBU0A&s",
    },
    {
      folderName: "folder1",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUzn7-qinvq-jbUgQWNL-OfnXUFXfxbtwMs6-Utey3A&s",
    },
    {
      folderName: "folder1",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-S-3usroBngWIFb_HPtfEsAlCaVzcuRgixmS2EleNTQ&s",
    },
    {
      folderName: "folder1",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdRDRDssXg4TL3lgIgyriPdpLCkkQlTR4uHt0hyZBLw&s",
    },
    {
      folderName: "folder2",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
    },
    {
      folderName: "folder2",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
    },
    {
      folderName: "folder1",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7J416hOfWITV89zoQg2XQLspTaleJBO5PaplWsQFIdw&s",
    },
    {
      folderName: "folder4",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UeEjjERyEVTOIaXIKHlj7snPZAKulH5-z1Kau1lsw&s",
    },
    {
      folderName: "folder3",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76FYz0As2hASaRAClWmY2-EAQWoNiOvJn6zMVkThCvw&s",
    },
    {
      folderName: "folder3",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
    },
    {
      folderName: "folder1",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFx557XPIXXmnhk7joe2Pq2uQhb1iCJ688RgQZzH5ZA&s",
    },
    {
      folderName: "folder5",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQamArqpuIrkX4TsOxhHA8CmGCdpQizkKRbDO7rW_Ww&s",
    },
    {
      folderName: "folder4",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ5odRUm01njfGb4YJcEHXRrumMwJPeW8bs2Jd_3_usg&s",
    },
    {
      folderName: "folder5",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEX9pl8af7Y7nzBN_8gY3XmGZKCzkUOqRcod9oXuBf4g&s",
    },
    {
      folderName: "folder4",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_xuRKDZMCnjKUSisk2P3pBoH1AY-xNGO5BPEyrxKiQ&s",
    },
    {
      folderName: "folder3",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNp5cdaIatjCHPZfk5xC3CqZFjq7znBp7uWfgM6ZBU0A&s",
    },
    {
      folderName: "folder2",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUzn7-qinvq-jbUgQWNL-OfnXUFXfxbtwMs6-Utey3A&s",
    },
    {
      folderName: "folder4",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-S-3usroBngWIFb_HPtfEsAlCaVzcuRgixmS2EleNTQ&s",
    },
    {
      folderName: "folder3",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdRDRDssXg4TL3lgIgyriPdpLCkkQlTR4uHt0hyZBLw&s",
    },
    {
      folderName: "folder2",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
    },
    {
      folderName: "folder1",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
    },
    {
      folderName: "folder3",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7J416hOfWITV89zoQg2XQLspTaleJBO5PaplWsQFIdw&s",
    },
    {
      folderName: "folder1",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UeEjjERyEVTOIaXIKHlj7snPZAKulH5-z1Kau1lsw&s",
    },
    {
      folderName: "folder3",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76FYz0As2hASaRAClWmY2-EAQWoNiOvJn6zMVkThCvw&s",
    },
    {
      folderName: "folder3",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
    },
    {
      folderName: "folder1",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFx557XPIXXmnhk7joe2Pq2uQhb1iCJ688RgQZzH5ZA&s",
    },
    {
      folderName: "folder1",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQamArqpuIrkX4TsOxhHA8CmGCdpQizkKRbDO7rW_Ww&s",
    },
    {
      folderName: "folder1",
      sourceName: "fsdfdfsdfsdfsdfsdf",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ5odRUm01njfGb4YJcEHXRrumMwJPeW8bs2Jd_3_usg&s",
    },
  ];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * stills.length);
    return stills[randomIndex];
  };

  // Example usage
  const randomImage = getRandomImage();

  useEffect(() => {
    const imagesByFolder = stills.reduce((acc, item) => {
      if (!acc[item.folderName]) {
        acc[item.folderName] = [];
      }
      acc[item.folderName].push(item);
      return acc;
    }, {});
    setImages(imagesByFolder);
  }, [stills]);

  const handleImageClick = (src) => {};

  const handleVideoClick = (src) => {
    setModalContent(
      <video className="model-vid" controls>
        <source src={src} type="video/mp4" />
      </video>
    );
    document.getElementById("myModal").classList.add("show");
  };

  return (
    <>
      <div className="">
        {Object.entries(images).map(([folderName, item]) => (
          <div key={folderName}>
            <h2 className="folderNameTitle">{folderName}</h2>
            <div id="gallery" className="container-fluid">
              {item.map((item, index) => (
                <div key={index} className="image-item">
                  <img
                    alt=""
                    src={item.src}
                    className="img-responsive"
                    onClick={onOpen}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader background={"black"} color={"#0ef"}>
            Modal Title
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Stills;
