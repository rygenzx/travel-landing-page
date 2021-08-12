import React from "react";
import {
  Section,
  Container,
  BookTripContent,
  Desc,
  Values,
  Image,
  Option,
  Card,
  Label,
} from "./BookTrip.style";
import Greece from "./../../assets/img/section/book-trip/image-card-greece.png";
import Rome from "./../../assets/img/section/book-trip/image-label-rome.png";

function BookTrip() {
  return (
    <Section>
      <Container>
        <BookTripContent>
          <Desc>
            <h4 className="title">Easy and Fast</h4>
            <h1 className="desc">Book Your Next Trip in 3 easy Steps</h1>
            <Values>
              <li>
                <div className="values-icon">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.544607 4.47549C0.248039 4.47549 0.00539207 4.23284 0 3.93627V0.544608C0 0.242647 0.242647 0 0.544607 0H3.93627C4.23284 0 4.47549 0.242647 4.47549 0.544608V1.72549H17.5245V0.544608C17.5245 0.248039 17.7672 0.00539216 18.0637 0H21.4554C21.752 0 21.9946 0.242647 22 0.544608V3.93627C22 4.23284 21.7574 4.47549 21.4554 4.47549H20.2745V17.5245H21.4554C21.752 17.5245 21.9946 17.7672 22 18.0637V21.4554C22 21.752 21.7574 21.9946 21.4554 22H18.0637C17.7672 22 17.5245 21.7574 17.5245 21.4554V20.2745H4.47549V21.4554C4.47549 21.752 4.23284 21.9946 3.93627 22H0.544607C0.248039 22 0.00539207 21.7574 0 21.4554V18.0637C0 17.7672 0.242647 17.5245 0.544607 17.5245H1.72549V4.47549H0.544607ZM20.9216 3.39706V1.07843H18.6029V3.39706H20.9216ZM18.6029 20.9216H20.9216V18.6029H18.6029V20.9216ZM4.47549 18.0637V19.1961H17.5245V18.0637C17.5245 17.7672 17.7672 17.5245 18.0637 17.5245H19.1961V4.47549H18.0637C17.7672 4.47549 17.5245 4.23284 17.5245 3.93627V2.80392H4.47549V3.93627C4.47549 4.23284 4.23284 4.47549 3.93627 4.47549H2.80392V17.5245H3.93627C4.23284 17.5245 4.47549 17.7672 4.47549 18.0637ZM1.07843 18.6029V20.9216H3.39706V18.6029H1.07843ZM3.39706 3.39706V1.07843H1.07843V3.39706H3.39706Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="values-body">
                  <h4 className="values-title">Choose Destination</h4>
                  <p className="values-desc">
                    Lorem ipsum dolor sit amet, consectetur adipsing elit. Urna,
                    tortor tempus.
                  </p>
                </div>
              </li>
              <li>
                <div className="values-icon">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.8184 17.9286C20.3682 17.9378 19.926 17.809 19.5512 17.5595C19.2723 17.3772 18.9462 17.2802 18.613 17.2802C18.2797 17.2802 17.9537 17.3772 17.6747 17.5595C17.2961 17.8006 16.8566 17.9286 16.4077 17.9286C15.9589 17.9286 15.5194 17.8006 15.1408 17.5595C14.8618 17.377 14.5357 17.2799 14.2023 17.2799C13.869 17.2799 13.5429 17.377 13.2639 17.5595C12.8853 17.8006 12.4458 17.9286 11.9969 17.9286C11.5481 17.9286 11.1086 17.8006 10.7299 17.5595C10.4512 17.3772 10.1253 17.28 9.79216 17.28C9.45904 17.28 9.13315 17.3772 8.85438 17.5595C8.5111 17.7876 8.1105 17.9144 7.69848 17.9253L7.67578 17.2767C7.98012 17.2695 8.27566 17.1732 8.52584 16.9997C8.90435 16.7587 9.34376 16.6307 9.79248 16.6307C10.2412 16.6307 10.6806 16.7587 11.0591 16.9997C11.3381 17.1821 11.6641 17.2792 11.9974 17.2792C12.3307 17.2792 12.6567 17.1821 12.9357 16.9997C13.3143 16.7585 13.754 16.6304 14.203 16.6304C14.6519 16.6304 15.0916 16.7585 15.4703 16.9997C15.7492 17.1821 16.0753 17.2792 16.4085 17.2792C16.7418 17.2792 17.0679 17.1821 17.3468 16.9997C17.7255 16.7588 18.165 16.6308 18.6138 16.6308C19.0626 16.6308 19.5021 16.7588 19.8808 16.9997C20.1604 17.1825 20.4872 17.2799 20.8213 17.2799C21.1554 17.2799 21.4822 17.1825 21.7618 16.9997C22.1362 16.751 22.5776 16.6224 23.027 16.6313V17.2799C22.6924 17.2708 22.3636 17.3686 22.0884 17.5592C21.7127 17.809 21.2695 17.9379 20.8184 17.9286Z"
                      fill="white"
                    />
                    <path
                      d="M3.17843 17.9285C2.72836 17.9378 2.28626 17.809 1.91162 17.5594C1.63649 17.3686 1.30767 17.2707 0.973022 17.2798V16.6312C1.42319 16.6218 1.86542 16.7506 2.24016 17.0002C2.51513 17.191 2.84387 17.289 3.17843 17.2798C3.51314 17.289 3.84202 17.1909 4.11702 16.9999C4.49096 16.7504 4.93246 16.6217 5.38189 16.6312C5.82042 16.6213 6.2517 16.7442 6.61918 16.9837L6.29194 17.5435C6.02351 17.3628 5.70531 17.2706 5.38189 17.2798C5.04856 17.2708 4.72108 17.3685 4.44718 17.5587C4.07212 17.809 3.62923 17.9381 3.17843 17.9285Z"
                      fill="white"
                    />
                    <path
                      d="M20.8194 15.6579C20.3689 15.6671 19.9265 15.5383 19.5513 15.2888C19.2721 15.1064 18.9458 15.0092 18.6122 15.0092C18.2787 15.0092 17.9523 15.1064 17.6731 15.2888C17.2946 15.5298 16.8551 15.6578 16.4063 15.6578C15.9576 15.6578 15.5181 15.5298 15.1395 15.2888C14.8607 15.1065 14.5347 15.0094 14.2016 15.0094C13.8684 15.0094 13.5425 15.1065 13.2636 15.2888C12.8851 15.5299 12.4456 15.6579 11.9968 15.6579C11.548 15.6579 11.1085 15.5299 10.73 15.2888C10.4512 15.1065 10.1252 15.0094 9.79205 15.0094C9.45888 15.0094 9.13294 15.1065 8.8541 15.2888C8.47948 15.5384 8.03736 15.6672 7.58729 15.6579C7.13723 15.6672 6.6951 15.5384 6.32048 15.2888C6.04561 15.0981 5.71699 15.0001 5.38254 15.0093C5.04819 15.0002 4.71969 15.0981 4.44491 15.2888C4.07089 15.5381 3.62947 15.6669 3.18005 15.6579C2.72988 15.6672 2.28765 15.5384 1.91291 15.2888C1.63749 15.0977 1.30813 14.9997 0.973022 15.0093V14.3606C1.42309 14.3513 1.86519 14.4801 2.23983 14.7297C2.51496 14.9204 2.84378 15.0184 3.17843 15.0093C3.51277 15.0183 3.84127 14.9204 4.11605 14.7297C4.49008 14.4804 4.93149 14.3516 5.38091 14.3606C5.83132 14.351 6.27381 14.4799 6.6487 14.7297C6.92367 14.9205 7.25241 15.0184 7.58697 15.0093C7.92153 15.0184 8.25026 14.9205 8.52524 14.7297C8.90378 14.4886 9.34326 14.3605 9.79205 14.3605C10.2408 14.3605 10.6803 14.4886 11.0589 14.7297C11.3377 14.9121 11.6637 15.0092 11.997 15.0092C12.3302 15.0092 12.6562 14.9121 12.9351 14.7297C13.3136 14.4886 13.7531 14.3605 14.2019 14.3605C14.6507 14.3605 15.0902 14.4886 15.4687 14.7297C15.7476 14.9121 16.0736 15.0092 16.4068 15.0092C16.74 15.0092 17.066 14.9121 17.3449 14.7297C17.7238 14.4887 18.1636 14.3607 18.6127 14.3607C19.0618 14.3607 19.5016 14.4887 19.8805 14.7297C20.1599 14.912 20.4863 15.0091 20.8199 15.0091C21.1535 15.0091 21.4799 14.912 21.7593 14.7297C22.1344 14.4803 22.5767 14.3515 23.0271 14.3606V15.0093C22.6918 14.9998 22.3622 15.0977 22.0865 15.2888C21.7116 15.5381 21.2695 15.6669 20.8194 15.6579Z"
                      fill="white"
                    />
                    <path
                      d="M20.8184 13.388C20.3683 13.3972 19.9261 13.2684 19.5513 13.0189C19.2762 12.8282 18.9473 12.7303 18.6127 12.7394C18.3671 12.7309 18.1232 12.7833 17.9028 12.8918L17.6167 12.308C17.9263 12.1563 18.268 12.0814 18.6127 12.0897C19.0634 12.0806 19.5061 12.2097 19.8811 12.4598C20.1608 12.6426 20.4876 12.7399 20.8217 12.7399C21.1558 12.7399 21.4826 12.6426 21.7622 12.4598C22.1364 12.2109 22.5777 12.0821 23.0271 12.0907V12.7394C22.6925 12.7302 22.3637 12.828 22.0885 13.0186C21.7128 13.2685 21.2696 13.3974 20.8184 13.388Z"
                      fill="white"
                    />
                    <path
                      d="M16.4044 13.3879C15.9549 13.3973 15.5135 13.2686 15.1395 13.0191C14.8605 12.8366 14.5344 12.7395 14.2011 12.7395C13.8677 12.7395 13.5416 12.8366 13.2626 13.0191C12.884 13.2602 12.4445 13.3882 11.9957 13.3882C11.5468 13.3882 11.1073 13.2602 10.7287 13.0191C10.4497 12.8367 10.1237 12.7396 9.79043 12.7396C9.45716 12.7396 9.13111 12.8367 8.85216 13.0191C8.47759 13.2683 8.03578 13.397 7.586 13.3879C7.13593 13.3972 6.69382 13.2684 6.31918 13.0188C6.04406 12.8281 5.71524 12.7301 5.38059 12.7392C5.04726 12.7302 4.71978 12.828 4.44589 13.0181C4.07119 13.2682 3.62879 13.3972 3.17843 13.3879C2.72837 13.3972 2.28626 13.2684 1.91162 13.0188C1.63649 12.8281 1.30767 12.7301 0.973022 12.7392V12.0906C1.42319 12.0812 1.86542 12.21 2.24016 12.4597C2.51513 12.6504 2.84387 12.7484 3.17843 12.7392C3.51314 12.7484 3.84202 12.6503 4.11702 12.4593C4.49096 12.2098 4.93246 12.0811 5.38189 12.0906C5.83195 12.0813 6.27405 12.2101 6.6487 12.4597C6.92367 12.6504 7.25241 12.7484 7.58697 12.7392C7.92162 12.7483 8.25044 12.6504 8.52556 12.4597C8.90418 12.2186 9.3437 12.0906 9.79254 12.0906C10.2414 12.0906 10.6809 12.2186 11.0595 12.4597C11.3385 12.642 11.6645 12.7391 11.9978 12.7391C12.3311 12.7391 12.6571 12.642 12.9361 12.4597C13.3147 12.2184 13.7544 12.0903 14.2033 12.0903C14.6523 12.0903 15.092 12.2184 15.4706 12.4597C15.7564 12.6518 16.0952 12.7495 16.4394 12.7389C16.4644 12.7392 16.4895 12.7379 16.5143 12.735L16.6006 13.3778C16.5355 13.3854 16.4699 13.3888 16.4044 13.3879Z"
                      fill="white"
                    />
                    <path
                      d="M20.8194 11.1174C20.3689 11.1266 19.9265 10.9978 19.5513 10.7483C19.2721 10.5658 18.9458 10.4687 18.6122 10.4687C18.2787 10.4687 17.9523 10.5658 17.6731 10.7483C17.2946 10.9893 16.8551 11.1173 16.4063 11.1173C15.9576 11.1173 15.5181 10.9893 15.1395 10.7483C14.8607 10.5659 14.5347 10.4688 14.2016 10.4688C13.8684 10.4688 13.5425 10.5659 13.2636 10.7483C12.8851 10.9893 12.4456 11.1174 11.9968 11.1174C11.548 11.1174 11.1085 10.9893 10.73 10.7483C10.4512 10.5659 10.1252 10.4688 9.79205 10.4688C9.45888 10.4688 9.13294 10.5659 8.8541 10.7483C8.47948 10.9979 8.03736 11.1267 7.58729 11.1174C7.13723 11.1267 6.6951 10.9979 6.32048 10.7483C6.04561 10.5575 5.71699 10.4596 5.38254 10.4687C5.04819 10.4596 4.71969 10.5576 4.44491 10.7483C4.07089 10.9976 3.62947 11.1264 3.18005 11.1174C2.72988 11.1267 2.28765 10.9979 1.91291 10.7483C1.63749 10.5572 1.30813 10.4592 0.973022 10.4687V9.82008C1.42309 9.81077 1.86519 9.93958 2.23983 10.1892C2.51496 10.3799 2.84378 10.4778 3.17843 10.4687C3.51277 10.4778 3.84127 10.3799 4.11605 10.1892C4.49008 9.93983 4.93149 9.81103 5.38091 9.82008C5.83132 9.81051 6.27381 9.93933 6.6487 10.1892C6.92367 10.3799 7.25241 10.4779 7.58697 10.4687C7.92153 10.4779 8.25026 10.3799 8.52524 10.1892C8.90378 9.94806 9.34326 9.82 9.79205 9.82C10.2408 9.82 10.6803 9.94806 11.0589 10.1892C11.3377 10.3715 11.6637 10.4687 11.997 10.4687C12.3302 10.4687 12.6562 10.3715 12.9351 10.1892C13.3136 9.94806 13.7531 9.82 14.2019 9.82C14.6507 9.82 15.0902 9.94806 15.4687 10.1892C15.7476 10.3715 16.0736 10.4687 16.4068 10.4687C16.74 10.4687 17.066 10.3715 17.3449 10.1892C17.7238 9.94816 18.1636 9.82016 18.6127 9.82016C19.0618 9.82016 19.5016 9.94816 19.8805 10.1892C20.1599 10.3715 20.4863 10.4686 20.8199 10.4686C21.1535 10.4686 21.4799 10.3715 21.7593 10.1892C22.1344 9.93973 22.5767 9.81095 23.0271 9.82008V10.4687C22.6918 10.4592 22.3622 10.5572 22.0865 10.7483C21.7116 10.9976 21.2695 11.1264 20.8194 11.1174Z"
                      fill="white"
                    />
                    <path
                      d="M16.1978 10.8423L15.5858 10.6276C15.7434 10.1748 15.8078 9.69472 15.7751 9.21634C15.7424 8.73795 15.6133 8.27113 15.3954 7.84396L13.1677 3.48147C13.1457 3.43839 13.1336 3.39094 13.1323 3.34258C13.131 3.29423 13.1406 3.2462 13.1602 3.20201C13.1799 3.15783 13.2092 3.1186 13.2461 3.08721C13.2829 3.05583 13.3262 3.03307 13.373 3.02061L17.8126 1.83682C17.9573 1.79899 18.0812 1.70555 18.1573 1.57684C18.2335 1.44813 18.2557 1.29456 18.2192 1.14954C18.1827 1.00453 18.0904 0.879793 17.9624 0.802481C17.8344 0.725169 17.681 0.701533 17.5357 0.736716L12.1623 2.02104C12.0474 2.04818 11.9403 2.10141 11.8493 2.17659C11.7583 2.25177 11.6858 2.34688 11.6375 2.45457C11.5892 2.56226 11.5663 2.67963 11.5706 2.79758C11.575 2.91553 11.6064 3.03091 11.6625 3.13477L13.2581 6.09909C13.2986 6.17443 13.3077 6.26271 13.2834 6.34471C13.2591 6.42671 13.2034 6.4958 13.1284 6.53693L11.069 7.67206L10.756 7.10385L12.5339 6.12374L11.092 3.44223C10.9888 3.2508 10.9311 3.03822 10.9232 2.82091C10.9153 2.6036 10.9576 2.38739 11.0466 2.18901C11.1356 1.99062 11.2691 1.81537 11.4367 1.67681C11.6043 1.53824 11.8015 1.44008 12.0131 1.3899L17.3839 0.105905C17.6965 0.0268991 18.0278 0.0753364 18.3047 0.240561C18.5817 0.405786 18.7817 0.674263 18.8607 0.986932C18.9397 1.2996 18.8913 1.63085 18.726 1.9078C18.5608 2.18476 18.2923 2.38474 17.9797 2.46374L13.9275 3.54374L15.9734 7.5485C16.231 8.05401 16.3837 8.60642 16.4223 9.17248C16.4608 9.73854 16.3845 10.3065 16.1978 10.8423Z"
                      fill="white"
                    />
                    <path
                      d="M9.62229 7.73377L5.68103 9.90552L5.99392 10.4733L9.93518 8.3016L9.62229 7.73377Z"
                      fill="white"
                    />
                    <path
                      d="M19.1352 8.68493C18.6541 8.68493 18.1838 8.54227 17.7838 8.27499C17.3838 8.00771 17.072 7.62782 16.8879 7.18335C16.7038 6.73888 16.6556 6.2498 16.7495 5.77796C16.8434 5.30611 17.075 4.87269 17.4152 4.53251C17.7554 4.19233 18.1888 3.96066 18.6606 3.86681C19.1325 3.77295 19.6216 3.82112 20.066 4.00523C20.5105 4.18933 20.8904 4.5011 21.1577 4.90111C21.425 5.30112 21.5676 5.77141 21.5676 6.2525C21.5669 6.89741 21.3104 7.51571 20.8544 7.97173C20.3984 8.42775 19.7801 8.68424 19.1352 8.68493ZM19.1352 4.46872C18.7824 4.46872 18.4375 4.57333 18.1442 4.76934C17.8508 4.96534 17.6222 5.24393 17.4872 5.56988C17.3522 5.89582 17.3169 6.25448 17.3857 6.6005C17.4545 6.94652 17.6244 7.26436 17.8739 7.51382C18.1233 7.76329 18.4412 7.93318 18.7872 8.00201C19.1332 8.07084 19.4919 8.03551 19.8178 7.9005C20.1438 7.76549 20.4223 7.53686 20.6183 7.24352C20.8144 6.95018 20.919 6.6053 20.919 6.2525C20.9184 5.7796 20.7302 5.32623 20.3959 4.99184C20.0615 4.65744 19.6081 4.46932 19.1352 4.46872Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="values-body">
                  <h4 className="values-title">Make Payment</h4>
                  <p className="values-desc">
                    Lorem ipsum dolor sit amet, consectetur adipsing elit. Urna,
                    tortor tempus.
                  </p>
                </div>
              </li>
              <li>
                <div className="values-icon">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 11.125C4.20333 11.125 3.91332 11.213 3.66665 11.3778C3.41997 11.5426 3.22771 11.7769 3.11418 12.051C3.00065 12.3251 2.97094 12.6267 3.02882 12.9176C3.0867 13.2086 3.22956 13.4759 3.43934 13.6857C3.64912 13.8954 3.91639 14.0383 4.20737 14.0962C4.49834 14.1541 4.79994 14.1244 5.07403 14.0108C5.34812 13.8973 5.58238 13.705 5.74721 13.4584C5.91203 13.2117 6 12.9217 6 12.625C6 12.2272 5.84197 11.8456 5.56066 11.5643C5.27936 11.283 4.89783 11.125 4.5 11.125ZM4.5 13.375C4.35167 13.375 4.20666 13.331 4.08332 13.2486C3.95999 13.1662 3.86386 13.0491 3.80709 12.912C3.75033 12.775 3.73547 12.6242 3.76441 12.4787C3.79335 12.3332 3.86478 12.1996 3.96967 12.0947C4.07456 11.9898 4.2082 11.9184 4.35368 11.8894C4.49917 11.8605 4.64997 11.8753 4.78701 11.9321C4.92406 11.9889 5.04119 12.085 5.1236 12.2083C5.20601 12.3317 5.25 12.4767 5.25 12.625C5.25 12.8239 5.17098 13.0147 5.03033 13.1553C4.88968 13.296 4.69891 13.375 4.5 13.375Z"
                      fill="white"
                    />
                    <path
                      d="M19.5 11.125C19.2033 11.125 18.9133 11.213 18.6666 11.3778C18.42 11.5426 18.2277 11.7769 18.1142 12.051C18.0006 12.3251 17.9709 12.6267 18.0288 12.9176C18.0867 13.2086 18.2296 13.4759 18.4393 13.6857C18.6491 13.8954 18.9164 14.0383 19.2074 14.0962C19.4983 14.1541 19.7999 14.1244 20.074 14.0108C20.3481 13.8973 20.5824 13.705 20.7472 13.4584C20.912 13.2117 21 12.9217 21 12.625C21 12.2272 20.842 11.8456 20.5607 11.5643C20.2793 11.283 19.8978 11.125 19.5 11.125ZM19.5 13.375C19.3517 13.375 19.2067 13.331 19.0833 13.2486C18.96 13.1662 18.8639 13.0491 18.8071 12.912C18.7503 12.775 18.7355 12.6242 18.7644 12.4787C18.7933 12.3332 18.8648 12.1996 18.9697 12.0947C19.0746 11.9898 19.2082 11.9184 19.3537 11.8894C19.4992 11.8605 19.65 11.8753 19.787 11.9321C19.9241 11.9889 20.0412 12.085 20.1236 12.2083C20.206 12.3317 20.25 12.4767 20.25 12.625C20.25 12.8239 20.171 13.0147 20.0303 13.1553C19.8897 13.296 19.6989 13.375 19.5 13.375Z"
                      fill="white"
                    />
                    <path d="M8.625 13H15.375V13.75H8.625V13Z" fill="white" />
                    <path
                      d="M8.625 11.5H15.375V12.25H8.625V11.5Z"
                      fill="white"
                    />
                    <path
                      d="M10.875 5.875H13.125V6.625H10.875V5.875Z"
                      fill="white"
                    />
                    <path
                      d="M23.25 9.25V8.5C23.2491 8.20191 23.1303 7.91627 22.9195 7.70549C22.7087 7.4947 22.4231 7.37589 22.125 7.375H20.64L19.8638 4.6525L19.6312 3.72625C19.5702 3.48304 19.4297 3.26719 19.232 3.11296C19.0343 2.95874 18.7907 2.87499 18.54 2.875H15.375V1.375C15.3744 1.17627 15.2952 0.985849 15.1547 0.845326C15.0142 0.704802 14.8237 0.625594 14.625 0.625H9.375C9.17627 0.625594 8.98585 0.704802 8.84533 0.845326C8.7048 0.985849 8.62559 1.17627 8.625 1.375V2.875H5.46C5.20926 2.87499 4.96569 2.95874 4.76799 3.11296C4.57028 3.26719 4.42976 3.48304 4.36875 3.72625L4.14 4.64875L3.36 7.375H1.875C1.57691 7.37589 1.29127 7.4947 1.08049 7.70549C0.869703 7.91627 0.75089 8.20191 0.75 8.5V9.25C0.750607 9.43997 0.79944 9.62668 0.891922 9.79262C0.984403 9.95856 1.1175 10.0983 1.27875 10.1987C0.93975 10.5471 0.750047 11.0139 0.75 11.5V16C0.750517 16.1573 0.784179 16.3128 0.848792 16.4562C0.913405 16.5996 1.00752 16.7279 1.125 16.8325V18.25C1.12589 18.5481 1.2447 18.8337 1.45549 19.0445C1.66627 19.2553 1.95191 19.3741 2.25 19.375H5.25C5.54809 19.3741 5.83373 19.2553 6.04451 19.0445C6.2553 18.8337 6.37411 18.5481 6.375 18.25V17.125H17.625V18.25C17.6259 18.5481 17.7447 18.8337 17.9555 19.0445C18.1663 19.2553 18.4519 19.3741 18.75 19.375H21.75C22.0481 19.3741 22.3337 19.2553 22.5445 19.0445C22.7553 18.8337 22.8741 18.5481 22.875 18.25V16.8325C22.9925 16.7279 23.0866 16.5996 23.1512 16.4562C23.2158 16.3128 23.2495 16.1573 23.25 16V11.5C23.25 11.0139 23.0602 10.5471 22.7213 10.1987C22.8825 10.0983 23.0156 9.95856 23.1081 9.79262C23.2006 9.62668 23.2494 9.43997 23.25 9.25ZM9.375 1.375H14.625V2.875H9.375V1.375ZM5.09625 3.91C5.11635 3.8287 5.16309 3.75647 5.22901 3.70481C5.29493 3.65316 5.37625 3.62506 5.46 3.625H18.54C18.6237 3.62506 18.7051 3.65316 18.771 3.70481C18.8369 3.75647 18.8836 3.8287 18.9037 3.91L19.02 4.375H4.98L5.09625 3.91ZM4.78125 5.125H19.2188L20.5012 9.625H9.71625C9.62811 9.10094 9.35712 8.62507 8.95138 8.28187C8.54565 7.93867 8.03142 7.75036 7.5 7.75036C6.96858 7.75036 6.45435 7.93867 6.04862 8.28187C5.64288 8.62507 5.37189 9.10094 5.28375 9.625H3.49875L4.78125 5.125ZM8.9475 9.625H6.0525C6.13438 9.30322 6.32114 9.0179 6.58327 8.81412C6.84541 8.61033 7.16797 8.49969 7.5 8.49969C7.83203 8.49969 8.15459 8.61033 8.41673 8.81412C8.67886 9.0179 8.86562 9.30322 8.9475 9.625ZM1.5 8.5C1.5 8.40054 1.53951 8.30516 1.60984 8.23483C1.68016 8.16451 1.77554 8.125 1.875 8.125H3.14625L2.71875 9.625H1.875C1.77554 9.625 1.68016 9.58549 1.60984 9.51517C1.53951 9.44484 1.5 9.34946 1.5 9.25V8.5ZM5.625 18.25C5.625 18.3495 5.58549 18.4448 5.51516 18.5152C5.44484 18.5855 5.34946 18.625 5.25 18.625H2.25C2.15054 18.625 2.05516 18.5855 1.98484 18.5152C1.91451 18.4448 1.875 18.3495 1.875 18.25V17.125H5.625V18.25ZM22.125 18.25C22.125 18.3495 22.0855 18.4448 22.0152 18.5152C21.9448 18.5855 21.8495 18.625 21.75 18.625H18.75C18.6505 18.625 18.5552 18.5855 18.4848 18.5152C18.4145 18.4448 18.375 18.3495 18.375 18.25V17.125H22.125V18.25ZM22.5 16C22.5 16.0995 22.4605 16.1948 22.3902 16.2652C22.3198 16.3355 22.2245 16.375 22.125 16.375H1.875C1.77554 16.375 1.68016 16.3355 1.60984 16.2652C1.53951 16.1948 1.5 16.0995 1.5 16V15.625H22.5V16ZM22.5 14.875H1.5V11.5C1.50089 11.2019 1.6197 10.9163 1.83049 10.7055C2.04127 10.4947 2.32691 10.3759 2.625 10.375H21.375C21.6731 10.3759 21.9587 10.4947 22.1695 10.7055C22.3803 10.9163 22.4991 11.2019 22.5 11.5V14.875ZM22.5 9.25C22.5 9.34946 22.4605 9.44484 22.3902 9.51517C22.3198 9.58549 22.2245 9.625 22.125 9.625H21.2812L20.8538 8.125H22.125C22.2245 8.125 22.3198 8.16451 22.3902 8.23483C22.4605 8.30516 22.5 8.40054 22.5 8.5V9.25Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="values-body">
                  <h4 className="values-title">
                    Reach Airport on Selected Date
                  </h4>
                  <p className="values-desc">
                    Lorem ipsum dolor sit amet, consectetur adipsing elit. Urna,
                    tortor tempus.
                  </p>
                </div>
              </li>
            </Values>
          </Desc>
          <Image>
            <Card>
              <img src={Greece} className="card-image" alt="greece trip" />
              <h4 className="card-title">Trip to Greece</h4>
              <p className="card-desc">14-29 June | by Robbin joseph</p>
              <Option>
                <li>
                  <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M13.6544 0.150827C13.2855 0.0428744 4.26244 -0.855475 1.09361 3.42567C-0.309832 5.32223 -0.330914 7.9221 1.02328 11.1525C0.679764 11.8655 0.379038 12.6166 0.133956 13.4091C0.0594447 13.6499 0.194222 13.9052 0.434764 13.9795C0.479608 13.9934 0.525026 14 0.56987 14C0.764338 14 0.944888 13.8744 1.00515 13.6787C3.42037 5.87028 11.2693 2.09267 13.6762 1.13835C13.9105 1.0454 14.2235 0.317405 13.6544 0.150827Z"
                        fill="#84829A"
                      />
                      <path
                        d="M2.47192 12.1298C3.77832 12.6778 5.08453 12.9587 6.29922 12.9587C7.39103 12.9587 8.40923 12.7342 9.28663 12.279C11.0525 11.363 12.1315 9.61081 12.4071 7.21132C12.6878 4.7659 13.0373 3.23416 13.3289 2.29712C10.7336 3.49428 5.16878 6.5974 2.47192 12.1298Z"
                        fill="#84829A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M13.5009 3.56123e-08C13.4232 -2.92608e-05 13.3466 0.0180173 13.2771 0.0527336L9.48821 1.94771L5.20378 0.0432416C5.19678 0.0402533 5.18878 0.039726 5.18128 0.0367378C5.16201 0.0295308 5.14229 0.0235251 5.12228 0.0187497C5.10239 0.0133885 5.08217 0.00919911 5.06178 0.00624017C5.02118 0.00290038 4.98037 0.00290038 4.93979 0.00624017C4.9194 0.00919911 4.89919 0.0133885 4.8793 0.0187497C4.85929 0.0235251 4.83957 0.0295308 4.82029 0.0367378C4.81279 0.039726 4.80479 0.040224 4.79779 0.0432416L0.297862 2.04322C0.11722 2.12343 0.000825201 2.30255 0.000854498 2.50019V13.5C0.000942387 13.6692 0.0865172 13.8268 0.228341 13.919C0.370195 14.0114 0.549108 14.0257 0.703822 13.957L5.00076 12.047L9.29769 13.957C9.30519 13.96 9.31319 13.957 9.32069 13.9615C9.44174 14.0157 9.5807 14.0126 9.69917 13.953C9.70717 13.9496 9.71616 13.953 9.72416 13.9475L13.7241 11.9476C13.8936 11.8629 14.0007 11.6896 14.0006 11.5V0.500237C14.0008 0.224088 13.777 0.000117221 13.5009 3.56123e-08ZM4.50079 11.1751L1.00083 12.7305V2.8252L4.50079 1.26971V11.1751ZM9.00072 12.7305L5.50076 11.1751V1.26971L9.00072 2.82517V12.7305ZM13.0006 11.1911L10.0007 12.691V2.80918L13.0006 1.3092V11.1911Z"
                        fill="#84829A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3433 1.24239L6.02577 7.58322C5.95335 7.54126 5.87719 7.50611 5.79827 7.47822L1.62744 6.06656C1.5013 6.03495 1.38935 5.9621 1.30935 5.85958C1.22936 5.75706 1.18591 5.63076 1.18591 5.50072C1.18591 5.37069 1.22936 5.24439 1.30935 5.14187C1.38935 5.03935 1.5013 4.9665 1.62744 4.93489L11.9758 1.25406C12.0434 1.23109 12.1143 1.21927 12.1858 1.21906C12.2392 1.2182 12.2924 1.22608 12.3433 1.24239Z"
                      fill="#84829A"
                    />
                    <path
                      d="M12.7459 2.02424L9.06503 12.3842C9.02444 12.505 8.94545 12.6091 8.84012 12.6807C8.73478 12.7524 8.6089 12.7875 8.4817 12.7809C8.35303 12.7868 8.22602 12.7499 8.1205 12.6761C8.01498 12.6022 7.93687 12.4955 7.89836 12.3726L6.51003 8.20174C6.48214 8.12282 6.44699 8.04666 6.40503 7.97424L12.7575 1.65674C12.7934 1.77729 12.7893 1.9062 12.7459 2.02424Z"
                      fill="#84829A"
                    />
                  </svg>
                </li>
              </Option>
              <div className="card-label">
                <div className="card-label_desc">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.266665 15.4667H1.86667V6.66667C1.86667 6.5194 1.98607 6.4 2.13333 6.4H5.86667V0.266667C5.86667 0.1194 5.98607 0 6.13333 0H13.0667C13.2139 0 13.3333 0.1194 13.3333 0.266667V15.4667H15.7333C15.8806 15.4667 16 15.5861 16 15.7333C16 15.8806 15.8806 16 15.7333 16H0.266665C0.119399 16 0 15.8806 0 15.7333C0 15.5861 0.119399 15.4667 0.266665 15.4667ZM10.4 15.4667H11.4667V13.0667C11.4667 12.9194 11.3473 12.8 11.2 12.8H10.6667C10.5194 12.8 10.4 12.9194 10.4 13.0667V15.4667ZM9.33333 6.66667V15.4667H9.86667V13.0667C9.86667 12.6248 10.2248 12.2667 10.6667 12.2667H11.2C11.6418 12.2667 12 12.6248 12 13.0667V15.4667H12.8V0.533333H6.4V6.4H9.06667C9.21393 6.4 9.33333 6.5194 9.33333 6.66667ZM2.4 15.4667H8.8V6.93333H2.4V15.4667Z"
                      fill="#84829A"
                    />
                    <path
                      d="M7.46658 3.7334H9.06659C9.21385 3.7334 9.33325 3.8528 9.33325 4.00007V5.60007C9.33325 5.74733 9.21385 5.86673 9.06659 5.86673H7.46658C7.31932 5.86673 7.19992 5.74733 7.19992 5.60007V4.00007C7.19992 3.8528 7.31932 3.7334 7.46658 3.7334ZM7.73325 5.3334H8.79992V4.26673H7.73325V5.3334Z"
                      fill="#84829A"
                    />
                    <path
                      d="M7.46658 1.06665H9.06659C9.21385 1.06665 9.33325 1.18605 9.33325 1.33332V2.93332C9.33325 3.08058 9.21385 3.19998 9.06659 3.19998H7.46658C7.31932 3.19998 7.19992 3.08058 7.19992 2.93332V1.33332C7.19992 1.18605 7.31932 1.06665 7.46658 1.06665ZM7.73325 2.66665H8.79992V1.59998H7.73325V2.66665Z"
                      fill="#84829A"
                    />
                    <path
                      d="M10.1333 3.7334H11.7333C11.8806 3.7334 12 3.8528 12 4.00007V5.60007C12 5.74733 11.8806 5.86673 11.7333 5.86673H10.1333C9.98607 5.86673 9.86667 5.74733 9.86667 5.60007V4.00007C9.86667 3.8528 9.98607 3.7334 10.1333 3.7334ZM10.4 5.3334H11.4667V4.26673H10.4V5.3334Z"
                      fill="#84829A"
                    />
                    <path
                      d="M10.1333 1.06665H11.7333C11.8806 1.06665 12 1.18605 12 1.33332V2.93332C12 3.08058 11.8806 3.19998 11.7333 3.19998H10.1333C9.98607 3.19998 9.86667 3.08058 9.86667 2.93332V1.33332C9.86667 1.18605 9.98607 1.06665 10.1333 1.06665ZM10.4 2.66665H11.4667V1.59998H10.4V2.66665Z"
                      fill="#84829A"
                    />
                    <path
                      d="M10.1333 6.3999H11.7333C11.8806 6.3999 12 6.5193 12 6.66657V8.26657C12 8.41384 11.8806 8.53324 11.7333 8.53324H10.1333C9.98607 8.53324 9.86667 8.41384 9.86667 8.26657V6.66657C9.86667 6.5193 9.98607 6.3999 10.1333 6.3999ZM10.4 7.9999H11.4667V6.93324H10.4V7.9999Z"
                      fill="#84829A"
                    />
                    <path
                      d="M10.1333 9.06665H11.7333C11.8806 9.06665 12 9.18605 12 9.33332V10.9333C12 11.0806 11.8806 11.2 11.7333 11.2H10.1333C9.98607 11.2 9.86667 11.0806 9.86667 10.9333V9.33332C9.86667 9.18605 9.98607 9.06665 10.1333 9.06665ZM10.4 10.6667H11.4667V9.59998H10.4V10.6667Z"
                      fill="#84829A"
                    />
                    <path
                      d="M5.06659 12.2666H3.46659C3.31932 12.2666 3.19992 12.1472 3.19992 12V10.4C3.19992 10.2527 3.31932 10.1333 3.46659 10.1333H5.06659C5.21385 10.1333 5.33325 10.2527 5.33325 10.4V12C5.33325 12.1472 5.21385 12.2666 5.06659 12.2666ZM4.79992 10.6666H3.73325V11.7333H4.79992V10.6666Z"
                      fill="#84829A"
                    />
                    <path
                      d="M5.06659 9.59989H3.46659C3.31932 9.59989 3.19992 9.48049 3.19992 9.33322V7.73322C3.19992 7.58595 3.31932 7.46655 3.46659 7.46655H5.06659C5.21385 7.46655 5.33325 7.58595 5.33325 7.73322V9.33322C5.33325 9.48049 5.21385 9.59989 5.06659 9.59989ZM4.79992 7.99989H3.73325V9.06655H4.79992V7.99989Z"
                      fill="#84829A"
                    />
                    <path
                      d="M5.06659 14.9334H3.46659C3.31932 14.9334 3.19992 14.814 3.19992 14.6667V13.0667C3.19992 12.9194 3.31932 12.8 3.46659 12.8H5.06659C5.21385 12.8 5.33325 12.9194 5.33325 13.0667V14.6667C5.33325 14.814 5.21385 14.9334 5.06659 14.9334ZM4.79992 13.3334H3.73325V14.4H4.79992V13.3334Z"
                      fill="#84829A"
                    />
                    <path
                      d="M7.73333 12.2666H6.13333C5.98607 12.2666 5.86667 12.1472 5.86667 12V10.4C5.86667 10.2527 5.98607 10.1333 6.13333 10.1333H7.73333C7.8806 10.1333 8 10.2527 8 10.4V12C8 12.1472 7.8806 12.2666 7.73333 12.2666ZM7.46667 10.6666H6.4V11.7333H7.46667V10.6666Z"
                      fill="#84829A"
                    />
                    <path
                      d="M7.73333 9.59989H6.13333C5.98607 9.59989 5.86667 9.48049 5.86667 9.33322V7.73322C5.86667 7.58595 5.98607 7.46655 6.13333 7.46655H7.73333C7.8806 7.46655 8 7.58595 8 7.73322V9.33322C8 9.48049 7.8806 9.59989 7.73333 9.59989ZM7.46667 7.99989H6.4V9.06655H7.46667V7.99989Z"
                      fill="#84829A"
                    />
                    <path
                      d="M7.73333 14.9334H6.13333C5.98607 14.9334 5.86667 14.814 5.86667 14.6667V13.0667C5.86667 12.9194 5.98607 12.8 6.13333 12.8H7.73333C7.8806 12.8 8 12.9194 8 13.0667V14.6667C8 14.814 7.8806 14.9334 7.73333 14.9334ZM7.46667 13.3334H6.4V14.4H7.46667V13.3334Z"
                      fill="#84829A"
                    />
                  </svg>
                  <p>24 people going</p>
                </div>
                <div className="card-label_icon">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3644 2.45457C17.33 1.34265 15.8804 0.709981 14.3617 0.707636C12.8417 0.709395 11.3906 1.34173 10.3546 2.45386L10.0015 2.82698L9.64836 2.45386C7.59251 0.241198 4.13215 0.114128 1.91953 2.16998C1.82148 2.26112 1.72679 2.35577 1.63565 2.45386C-0.545218 4.80619 -0.545218 8.44162 1.63565 10.794L9.48255 19.069C9.75403 19.3556 10.2064 19.3679 10.493 19.0964C10.5024 19.0875 10.5115 19.0784 10.5204 19.069L18.3645 10.794C20.5452 8.44187 20.5452 4.80665 18.3644 2.45457ZM17.3302 9.80969H17.3294L10.0015 17.5386L2.67282 9.80969C1.00676 8.01229 1.00676 5.23481 2.67282 3.43741C4.1858 1.79757 6.74172 1.69475 8.38156 3.20773C8.46118 3.28119 8.53778 3.35779 8.61124 3.43741L9.48255 4.35663C9.76969 4.64193 10.2333 4.64193 10.5204 4.35663L11.3917 3.43812C12.9047 1.79828 15.4606 1.69546 17.1005 3.20844C17.1801 3.2819 17.2567 3.35851 17.3302 3.43812C19.0107 5.23837 19.023 8.02092 17.3302 9.80969Z"
                      fill="#4152CA"
                    />
                  </svg>
                </div>
              </div>
            </Card>
            <Label>
              <img src={Rome} className="label-image" alt="rome trip" />
              <div className="label-body">
                <p className="label-desc">Ongoing</p>
                <h4 className="label-title">Trip to Rome</h4>
                <div className="label-content">
                  <p className="label-content-title">
                    <span className="label-content-count">40% </span> Completed
                  </p>
                  <progress
                    min="0"
                    max="100"
                    value="32"
                    className="label-content-progress"
                  />
                </div>
              </div>
            </Label>
          </Image>
        </BookTripContent>
      </Container>
    </Section>
  );
}

export default BookTrip;
