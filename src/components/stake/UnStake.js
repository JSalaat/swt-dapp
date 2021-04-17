import React from 'react';
import styled from 'styled-components';

// import { dark as theme } from '../../themes/theme';
import Slider from './Slider';
import InputText from './Input';
import {BlueButton, GreyButton} from "./Buttons";


export const StakeWrapper = styled.div`
   height: 500px;
   margin-bottom: 20%;
   padding-top: 5vh;
   border-radius: 15px;
   margin-top: 5vh;
   h2 {
      text-transform: uppercase;
      text-align: center;
      font-weight: 500;
      letter-spacing: .3px;
      color: ${({ theme }) => theme.textPrimary};
      padding-bottom: 15px;
   }
   h4 {
      text-transform: uppercase;
      text-align: center;
      font-weight: 500;
      letter-spacing: .3px;
      color: ${({ theme }) => theme.textPrimary};
      padding-bottom: 15px;
   }
   .button_group_confirm {
      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      column-gap: 20px;
      margin-top: 20px;
   }
`;

const FormWrapper = styled.div`
   width: 350px;
   margin: 0 auto;
   margin-top: 30px;
`;

const InputHeader = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 0 25px;
   span {
      font-size: 13px;
      color: ${({theme}) => theme.textSecondary};
      /* cursor: pointer; */

   }
   .balance_click {
      font-weight: 600;
      color: ${({theme}) => theme.textPrimary};
      letter-spacing: 0.3px;
      cursor: pointer;
   }
`;
const InputTitle = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 0 25px;
   span {
      font-size: 13px;
      color: ${({theme}) => theme.textSecondary};
      /* cursor: pointer; */

   }
   .balance_click {
      font-weight: 600;
      color: ${({theme}) => theme.textPrimary};
      letter-spacing: 0.3px;
      cursor: pointer;
   }
`;

const Button = styled.div`
   display: grid;
   flex-direction: column;
   margin-top: 20px;
   color: ${({theme}) => theme.textPrimary};

   span:last-child {
      font-size: 11px;
      text-align: center;
      color: #888;

   }
   span:first-child {
      padding: 10px 0;
      font-size: 14px;
      letter-spacing: 0.8px;
      background-color: ${({disable, theme}) => disable ? theme.buttonPrimary : theme.background2};
      color: ${({ disable, theme }) => (disable ? theme.greyText : theme.textSecondary)};
      pointer-events: ${({ disable, theme }) => (disable ? 'none' : 'auto')};
      border: none;
      width: 95%;
      margin: 30px auto 15px auto;
      border-radius: 10px;
      font-family: Lato, sans-serif;
      align-content: center;
      justify-content: center;
      text-align: center;
      font-weight: 600;
      &:hover {
         cursor: pointer;
      }
   }
`;

const UnStake = ({
   amount,
   confirmBtnLoading,
   handleAmount,
   onUnStateButtonClick,
}) => {
   return (
      <StakeWrapper>

         <InputHeader>
            <h2>Staking and Farming Project</h2>
         </InputHeader>
         <FormWrapper>
            <br/>
            <InputTitle>
               <h4>Efficient incentive approach to solid waster minimization and control through Blockchain.</h4>
            </InputTitle>
            <br/>

            <InputTitle>
               <span>Staked Amount</span>
               {/*<span onClick={() => handleAmount(balanceNu)}>
                  Balance <b className="balance_click">{balanceNu.toFixed(2)}</b> CFP
               </span>*/}
            </InputTitle>

            <InputText
               onChange={(e) => handleAmount(e.target.value)}
               placeholder="0.0"
               autoComplete="off"
               type="text"
               name="nuAmount"
               value={amount}
               label="CFP"
            />

            <Button>
               <GreyButton onClick={onUnStateButtonClick} loading={confirmBtnLoading} text="UnStake CFP" />
               {/*<span>Enter amount to continue.</span>*/}
            </Button>
         </FormWrapper>
      </StakeWrapper>
   );
};

export default UnStake;
