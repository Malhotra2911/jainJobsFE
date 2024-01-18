import React from "react";
import "../../../css/Employer/Activitybook.css"
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard"
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import styled from "styled-components";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { orange } from "@mui/material/colors";


export default function OrderSummery() {


    return (
        <div className="background_img">
            <div className="activity_container">
                <JobSeekerdashboard />
                <div
                    className="All_activity_content"
                >
                    <DashboardProfile />
                    <div className="activity_table">
                        <Container>
                            <Main>
                                <ReviewContainer>
                                    <h2>Review Your Order</h2>
                                    <AddressContainer>
                                        <h5>About Plan Details</h5>
                                        <div>
                                            <p>Plan Duration: 30 Days</p>
                                            <p>Plan Price: Rs. 600.00 INR</p>
                                            <p>Plan Active From: 28:09:2022</p>
                                            <p>Plan Expairy Date :28:10:2022</p>
                                        </div>
                                    </AddressContainer>
                                    <PaymentContainer>
                                        <h5>Payment</h5>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox
                                            
                                            defaultChecked
                                            sx={{
                                                color: orange,
                                                '&.Mui-checked': {
                                                    color: orange[600],
                                                },
                                            }}
                                        />} label="Add my 10 cents during Payment" />
                                        </FormGroup>
                                        <div>
                                        <Buton
                                        >
                                            Pay 800 INR
                                        </Buton>
                                        </div>
                                    </PaymentContainer>

                                    <OrderContainer>
                                        <h5>Plan are you going to Subscribe:</h5>
                                        <p>One Time Hiring</p>

                                        <div>
                                        </div>
                                    </OrderContainer>
                                </ReviewContainer>
                            </Main>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}



const Container = styled.div`
  width: 100%;

  max-width: 1400px;
  background-color: transparent;
`;

const Main = styled.div`
  padding: 15px;
  display: flex;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const Buton = styled.button`
width:auto;
padding:0rem 1rem 0rem 1rem;
color:white;
font-family:"Poppins",sans-serif;
border-radius:7px;
height:35px;
border:none;
outline:none;
background:green;
justify-content:center;
`;
const ReviewContainer = styled.div`
  background-color: #EEEEEE;
  flex: 0.7;
  padding: 15px;
  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;

const AddressContainer = styled.div`
  margin-top: 20px;
  div {
    margin-top: 10px;
    margin-left: 10px;

    p {
      font-size: 14px;
      margin-top: 4px;
      font-family:"Poppins",sans-serif;
    }
  }
`;

const PaymentContainer = styled.div`
  margin-top: 15px;

  div {
    margin-top: 15px;
    margin-left: 15px;

    p {
      font-size: 14px;
      font-family:"Poppins",sans-serif;
    }
  }
`;

const OrderContainer = styled.div`
  margin-top: 30px;
`;

