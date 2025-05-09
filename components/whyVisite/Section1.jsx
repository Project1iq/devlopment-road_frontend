import React, { useState } from "react";
import Image from "next/image";

import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import Link from "next/link";
export default function Section1({ data }) {
  const lang = useRecoilValue(langState);

  const [formData, setFormData] = useState({});
  const handleChage = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const points = [
    {
      id: 1,
      content_ar: (
        <>
          <strong>يسرنا أن نقدم معرض ومؤتمر طاقة العراق الدولي العاشر</strong>{" "}
          والذي أصبح <strong>حدثاً بارزاً في قطاع الطاقة</strong> حيث يوفر فرصاً
          متنامية للتواصل مع كبرى شركات الطاقة العالمية واستكشاف{" "}
          <strong>أحدث المنتجات والحلول</strong> التي تشكل مستقبل الصناعة.
        </>
      ),
      content: (
        <>
          We are pleased to present the{" "}
          <strong>
            10th Iraq Energy International Exhibition and Conference
          </strong>
          , which has become a{" "}
          <strong>prominent event in the energy sector</strong>. It provides
          growing opportunities to connect with leading global energy companies
          and explore the <strong>latest products and solutions</strong> that
          are shaping the future of the industry.
        </>
      ),
    },
    {
      id: 2,
      content_ar: (
        <>
          يوفر لك هذا الحدث الفرصة <strong>لاكتشاف حلول الطاقة المبتكرة</strong>{" "}
          وبناء <strong>علاقات تجارية طويلة الأمد</strong> تدعم رحلتك نحو التميز
          وتساعد على تنويع محفظة أعمالك.
        </>
      ),
      content: (
        <>
          This event offers you the opportunity to{" "}
          <strong>discover innovative energy solutions</strong> and build{" "}
          <strong>long-term business relationships</strong> that support your
          journey towards excellence and help diversify your business portfolio.
        </>
      ),
    },
    {
      id: 3,
      content_ar: (
        <>
          وسط التحولات السريعة في هذا القطاع التي تركز على{" "}
          <strong>تنوع الطاقة والرقمنة والأستدامة</strong> يهدف المعرض إلى تسليط
          الضوء على <strong>ستة قطاعات رئيسية</strong> حول مجال الطاقة العالمي.
        </>
      ),
      content: (
        <>
          Amid the rapid transformations in this sector, which focus on{" "}
          <strong>
            energy diversification, digitization, and sustainability
          </strong>
          , the exhibition aims to highlight <strong>six key sectors</strong> in
          the global energy field. Join us to explore the{" "}
          <strong>latest innovations</strong> in the energy sector and enhance
          business networks that support your efforts towards a{" "}
          <strong>digital and sustainable energy future</strong>.
        </>
      ),
    },
  ];

  return (
    <>
      <section style={{backgroundColor:"#304D73"}} className="row section-1 mx-auto">
        <div  style={{backgroundColor:"#304D73"}} action="" className="form-container ">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12 ">
                <div className="">
                  <h2 className="main-text text-center">
                    {lang ? " فوائد معرض ومؤتمر طريق التنمية :-" : "Why the Development Road Matters :-"}
                  </h2>
                  <div>
                    <ul className="list-unstyled d-none">
                      {points.map((point) => (
                        <li key={point.id}>
                          <p className="point mb-3 d-md-none col-md-12">
                            {lang ? point.content_ar : point.content}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mai col-md-12 col-12 d-flex justify-content-start flex-md-row  pt-2 ">
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center  py-4 px-3">
                  {" "}
                  <div className="col-11 align-self-center mb-4">
                   
                      {" "}
                      <Image
                        src="/images/icons/1.png"
                        alt="وصف للصورة"
                        width={2000}

                        height={2000}
                        className={"responsiveImage "}
                      />
                   
                  </div>
                  <div className="  d-flex flex-column justify-content-center ">
                    <h5 className=" bm text-center">
                      {lang ? "تبادل المعرفة " : " Participant "}

                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "بين الجهات " : " knowledge "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {" "}
                      {lang ? "المشاركة" : "sharing"}{" "}
                    </h5>
                  </div>
                </div>
            
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center  py-4 px-3">
                  <div className="col-11 align-self-center mb-4">
                    
                      {" "}
                      <Image
                        src="/images/icons/3.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                    
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "تحسين الصورة  " : " Enhancing image "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "العامة كبيئة   " : " as successful "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {lang ? "استثمارية ناجحة " : " investment hub "}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center py-4 px-3">
                  <div className="col-11 align-self-center mb-4">
                    
                      {" "}
                      <Image
                        src="/images/icons/4.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                   
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "دعم تنويع " : " Boosting local "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "الاقتصاد " : " economic "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {" "}
                      {lang ? "المحلي " : " diversity "}{" "}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center py-4 px-3">
                <div className="col-11 align-self-center mb-4">
                   
                      {" "}
                      <Image
                        src="/images/icons/6.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                    
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "جذب  " : " Attracting "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "استثمارات  " : " foreign "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {" "}
                      {lang ? "اجنبية" : "investments "}{" "}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center  py-4 px-3">
                <div className="col-11 align-self-center mb-4">
                   
                      {" "}
                      <Image
                        src="/images/icons/5.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                    
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "خلق " : "Creating "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "فرص عمل  " : "global"}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {lang ? "دولية   " : " jobs "}{" "}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center py-4 px-3">
                  <div className="col-11 align-self-center mb-4">
                    
                      {" "}
                      <Image
                        src="/images/icons/2.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                   
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "  الترويج عن " : " Promoting the   "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? " مشروع طريق   " : "  Development "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {lang ? " التنمية " : " Road "}
                    </h5>
                  </div>
                </div>
              </div>
              
              <div className="mai col-md-12 col-12 d-flex justify-content-center flex-md-row  pt-2 ">
          
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center py-4 px-3">
                  <div className="col-11 align-self-center mb-4">
                   
                      {" "}
                      <Image
                        src="/images/icons/8.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                   
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "تقليل  " : " Lowering "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "معدلات  " : "  jobless "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {lang ? "البطالة " : " rates "}
                    </h5>
                  </div>
                </div>
             
            
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center py-4 px-3">
                <div className="col-11 align-self-center mb-4">
                    
                      {" "}
                      <Image
                        src="/images/icons/11.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                    
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "نشر الوعي " : " Raising "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "بمشاركة المعرفة " : " awareness "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {" "}
                      {lang ? "عن المشروع" : "through sharing "}{" "}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center  py-4 px-3">
                <div className="col-11 align-self-center mb-4">
                    
                      {" "}
                      <Image
                        src="/images/icons/7.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                   
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "فتح حوار " : "Start "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "لتوضيح  " : "dialogue "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {lang ? "المتطلبات   " : " for clarity "}{" "}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center py-4 px-3">
                  <div className="col-11 align-self-center mb-4">
                    
                      {" "}
                      <Image
                        src="/images/icons/10.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      
                      />
                    
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "تبادل المعرفة " : "  experience "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "والخبرات بين " : " exchange  "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {" "}
                      {lang ? "المختصين والخبراء " : " among experts "}{" "}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center  py-4 px-3">
                  <div className="col-11 align-self-center mb-4">
                    
                      {" "}
                      <Image
                        src="/images/icons/9.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                    
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "تحسين " : " Enhancing "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "مستوى  " : " quality of "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {lang ? "المعيشة " : " life "}
                    </h5>
                  </div>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </section>
      <div class="col-12">
        <hr />
      </div>
    </>
  );
}
