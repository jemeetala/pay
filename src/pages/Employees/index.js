import React from "react";

import { Column, Row, Img, Text, Button, Stack, List } from "components";
import { getProducts } from "service/api";

const EmployeesPage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = {};
    getProducts(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Column className="bg-bluegray_50 font-sourcesanspro items-center mx-[auto] pb-[1px] px-[1px] w-[100%]">
        <header className="w-[99%]">
          <Row className="bg-white_A700 border border-indigo_50 border-solid items-center lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
            <Row className="border border-bluegray_200 border-solid items-center justify-center ml-[1px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[11%]">
              <Img
                src="images/img_vector.png"
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] ml-[2px] w-[16%]"
                alt="Vector"
              />
              <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] xl:mr-[10px] mr-[12px] 3xl:mr-[14px] lg:mr-[9px] mt-[1px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]">
                Employees
              </Text>
            </Row>
            <Text className="border border-bluegray_200 border-solid font-normal leading-[normal] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 w-[34%]">
              Search your employees...
            </Text>
            <Button className="font-normal lg:ml-[104px] xl:ml-[119px] ml-[134px] 3xl:ml-[160px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[6%]">
              DashBoard
            </Button>
            <Button className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[7%]">
              Employee List
            </Button>
            <Text className="bg-white_A700 border border-gray_200 border-solid font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:py-[4px] xl:py-[5px] py-[6px] 3xl:py-[7px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-indigo_A200 w-[auto]">
              Capabilities
            </Text>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] w-[3%]">
              <div className="absolute bg-bluegray_900 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2132 w-[100%]"></div>
              <Img
                src="images/img_plus.png"
                className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] w-[40%]"
                alt="plus"
              />
            </Stack>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
              <div className="absolute bg-white_A700 border border-gray_201 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2132 w-[100%]"></div>
              <Img
                src="images/img_vector_gray_700.png"
                className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] w-[50%]"
                alt="Vector"
              />
            </Stack>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
              <div className="absolute bg-white_A700 border border-gray_201 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2132 w-[100%]"></div>
              <Img
                src="images/img_vector_gray_700_31X33.png"
                className="absolute bottom-[5%] lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] inset-x-[0] mx-[auto] w-[79%]"
                alt="Vector"
              />
            </Stack>
            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
              <div className="absolute bg-red_600 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius192 w-[100%]"></div>
              <Img
                src="images/img_1.png"
                className="absolute bottom-[31%] xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] inset-x-[0] mx-[auto] w-[13%]"
                alt="1"
              />
            </Stack>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
              <div className="absolute bg-amber_100 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2132 w-[100%]"></div>
              <Img
                src="images/img_refresh.png"
                className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] w-[29%]"
                alt="refresh"
              />
            </Stack>
          </Row>
        </header>
        <Column className="font-inter items-center lg:mb-[243px] xl:mb-[278px] mb-[313px] 3xl:mb-[375px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] outline outline-[1px] outline-gray_202 lg:pb-[28px] xl:pb-[32px] pb-[36px] 3xl:pb-[43px] w-[99%]">
          <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-center w-[100%]">
            <Row className="items-center justify-evenly w-[100%]">
              <Img
                src="images/img_creditcard.png"
                className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] w-[5%]"
                alt="creditcard"
              />
              <Row className="bg-gray_50 border-bw05 border-gray_202 border-solid items-center justify-center lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] w-[16%]">
                <Text className="font-bold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                  Name
                </Text>
                <Img
                  src="images/img_question.png"
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mr-[110px] mr-[124px] 3xl:mr-[148px] lg:mr-[96px] w-[7%]"
                  alt="question"
                />
              </Row>
              <Row className="bg-gray_50 border-bw05 border-gray_202 border-solid items-center justify-end lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] w-[16%]">
                <Text className="font-bold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                  Designation
                </Text>
                <Img
                  src="images/img_question.png"
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93px] w-[5%]"
                  alt="sort"
                />
              </Row>
              <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                Status
              </Text>
              <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                Time
              </Text>
              <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                Joining Date
              </Text>
              <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                Action
              </Text>
            </Row>
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              {apiData?.products?.map((apiDataProductsEle) => {
                return (
                  <Row className="items-center justify-evenly my-[0] w-[100%]">
                    <Img
                      src="images/img_battery.png"
                      className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] w-[5%]"
                      alt="battery"
                    />
                    <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                      <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                        {apiDataProductsEle?.name}
                      </Text>
                    </Column>
                    <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                      {apiDataProductsEle?.description}
                    </Text>
                    <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                      <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                        Cancelled
                      </Text>
                    </Column>
                    <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                      2400
                    </Text>
                    <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                      {apiDataProductsEle?.create_time}
                    </Text>
                    <Row className="bg-white_A700 border-bw05 border-gray_202 border-solid items-center justify-center p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                      <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Edit
                      </Text>
                      <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mr-[100px] mr-[113px] 3xl:mr-[135px] lg:mr-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Details
                      </Text>
                    </Row>
                  </Row>
                );
              })}
            </List>
          </Column>
          <Column className="bg-gray_100 border border-indigo_50 border-solid font-sourcesanspro justify-end lg:mt-[105px] xl:mt-[120px] mt-[136px] 3xl:mt-[163px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] w-[94%]">
            <Button
              className="font-normal lg:ml-[444px] xl:ml-[507px] ml-[571px] 3xl:ml-[685px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[9%]"
              variant="OutlineGray2001_2"
            >
              Sync All Employee
            </Button>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default EmployeesPage;
