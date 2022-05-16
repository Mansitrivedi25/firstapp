import { useState } from "react";

const Gallery = () => {
  const img1 = "https://i.ytimg.com/vi/g1n_1thVbfg/maxresdefault.jpg";
  const img2 =
    "https://gamerssuffice.com/wp-content/uploads/2019/11/Need-for-Speed-Heat.jpg";
  const img3 =
    "https://store-images.s-microsoft.com/image/apps.36942.64089017197710810.41be4569-c1ec-4aff-8658-ec58f7466792.dddff402-496e-47e6-b071-3c5bb954dcc6?mode=scale&q=90&h=1080&w=1920";
  const img4 =
    "https://venturebeat.com/wp-content/uploads/2021/11/forzahorizon5-1.jpg?fit=2560%2C1440&strip=all";

  const [mainImg, setMainImg] = useState(img3);

  const changeImage = (img) => {
    // mainImg = img;  ❌
    setMainImg(img); // ✔
  };

  return (
    <div className="container">
      <img className="img-fluid" alt="" src={mainImg} />

      <div className="row mt-3">
        <div className="col-md-3">
          <img
            className="img-fluid"
            alt=""
            src={img1}
            onClick={() => {
              changeImage(img1);
            }}
          />
        </div>
        <div className="col-md-3">
          <img
            className="img-fluid"
            alt=""
            src={img2}
            onClick={() => {
              changeImage(img2);
            }}
          />
        </div>
        <div className="col-md-3">
          <img
            className="img-fluid"
            alt=""
            src={img3}
            onClick={() => {
              changeImage(img3);
            }}
          />
        </div>
        <div className="col-md-3">
          <img
            className="img-fluid"
            alt=""
            src={img4}
            onClick={() => {
              changeImage(img4);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;