import React, { useState } from "react";
import Image from "next/image";
import plants from "@/public/images/index/plants.png";
import water from "@/public/images/index/water.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import img from "@/public/images/location/7.jpg";

export default function Section1({ data }) {
  const lang = useRecoilValue(langState);

  const [formData, setFormData] = useState({});
  const handleChage = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const points = [
    {
      id: 1,
      content_ar: "الحدث: معرض طريق التنمية الدولي",
      content:
        "Event: The Development Path International Expo.",
    },
    {
      id: 2,
      content_ar: "موعد الحدث: 1-4  نوفمبر 2025",
      content: "Event date: 2025 nov 1-4 ",
    },
    {
      id: 3,
      content_ar: "وقت المعرض: 10 صباحاً الى الساعة 4 مساءاً",
      content: "Exhibition time: 10 am to 4 pm",
    },
    {
      id: 4,
      content_ar: "الموقع الالكتروني:  www.devlopment-road.iq",
      content: "Website: www.devlopment-road.iq",
    },
  ];

  return (
    <>
      <section className="row section-1 mx-auto">
        <div action="" className="form-container">
          <div className="container pt-lg-0 pt-5">
            <div className="bg-image col-12 mb-4">
              <div className="allpic">
                <div className="title pt-5 d-flex align-content-center px-4 overflow-hidden mb-3 ">
                  <div className="line"> </div>

                  <h1 className=" px-2 textfade ">{lang ? "الموقع" : "Location"}</h1>
                </div>
                <div className="px-5 text-white col-lg-8 col-12">
                  {" "}
                  <h6 className="d-none d-md-block">
                    {lang
                      ? "يُقام معرض طريق التنمية الدولي في بغداد، حيث يجمع الخبراء والشركات الرائدة في مجالات النقل والبناء والاستثمار والبنى التحتية والكهرباء لمناقشة أحدث المشاريع والتوجهات المستقبلية. فرصة فريدة للتواصل واستكشاف الحلول المتطورة في التنمية."
                      : "The Development Path International Expo is held in Baghdad, bringing together experts and leading companies in transportation, construction, investment, infrastructure, and electricity to discuss the latest projects and future trends. A unique opportunity to network and explore advanced development solutions."}
                  </h6>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-12">
                <h2 className="main-text">{lang ? "الموقع" : "Location"}</h2>
                <p className="sub-text">
                  {lang ? (
                    <>
                      يقام المعرض في أرض معرض بغداد الدولي،
                      مما يوفر الفرصة الأكبر لمشاركة ناجحة حيث يحتوي على مساحات
                      مسقفة ومكشوفة مخصصة للمعرض، بالإضافة إلى قاعات للمؤتمرات
                      الكبرى ومرافق لتقديم الخدمات اللوجستية ومنظومات أمنية
                      متكاملة.
                    </>
                  ) : (
                    <>
                      The exhibition is held at the Baghdad International Fairground,
                      providing the greatest opportunity for successful
                      participation. It includes covered and open spaces dedicated to
                      the expo, along with conference halls, logistical service
                      facilities, and integrated security systems.
                    </>
                  )}
                </p>

                <div>
                  <ul>
                    {points.map((point) => (
                      <li key={point.id}>
                        <p className="point mb-0">
                          {lang
                            ? point.content_ar.split(":")[0]
                            : point.content.split(":")[0]}{" "}
                          :
                          <span>
                            {lang
                              ? point.content_ar.split(":")[1]
                              : point.content.split(":")[1]}
                          </span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-12 d-flex justify-content-center flex-column px-md-5">
                <div className="row image-border w-100  mx-auto py-md-1 py-0 px-md-1 px-0">
                  <div className="col-md-2 col-12 px-0"></div>
                  <div className="col-md-12 col-12 px-0">
                    <Image
                      src="/images/location/loca.png"
                      alt="plants"
                      width={3000}
                      height={3000}
                      className=" w-100 h-auto image  "
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3334.1450499038674!2d44.36261958480407!3d33.31502318081287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDE4JzU0LjEiTiA0NMKwMjEnMzcuNiJF!5e0!3m2!1sar!2siq!4v1746904794899!5m2!1sar!2siq" 
                  width="600"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="w-100"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
