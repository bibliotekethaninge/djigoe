import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Banknote as BankIdWhite, PersonStanding as PersonalBankDevice, Banknote as BankDevice, Key } from 'lucide-react';

type LoginMethod = 'none' | 'bankid' | 'personal' | 'card' | 'support';

function LoginPage() {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState<LoginMethod>('none');
  const [personalNumber, setPersonalNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const handleLogin = (method: LoginMethod) => {
    setLoginMethod(method);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (personalNumber.length === 12 && securityCode) {
      if (loginMethod === 'support') {
        navigate('/support');
      } else {
        alert('Login successful!');
        setLoginMethod('none');
        setPersonalNumber('');
        setSecurityCode('');
      }
    } else {
      alert('Please enter a valid personal number (YYYYMMDDXXXX) and security code');
    }
  };

  const renderLoginForm = () => {
    if (loginMethod === 'none') return null;

    return (
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="personalNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Personnummer
          </label>
          <input
            type="text"
            id="personalNumber"
            placeholder="YYYYMMDDXXXX"
            value={personalNumber}
            onChange={(e) => setPersonalNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            maxLength={12}
          />
        </div>
        {loginMethod === 'support' && (
          <div>
            <label htmlFor="securityCode" className="block text-sm font-medium text-gray-700 mb-1">
              Säkerhetskod
            </label>
            <input
              type="password"
              id="securityCode"
              placeholder="Enter security code"
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        )}
        <button 
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
        >
          Logga in
        </button>
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="login_componentWrapper__w7Jsp">
        <div className="login-component_wrapper__hNMSM">
          <div className="selector_formWrapper__FoTnB">
            <h1 className="selector_title__BJg9L text-3xl font-bold text-center mb-8">Logga in</h1>
            
            <img 
              src="https://www.icabanken.se/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flogin.5c320c81.svg&w=700&q=75"
              alt="Nyckel i moln"
              width={295}
              height={212}
              className="selector_image__7rWod mx-auto mb-8"
            />

            <div className="selector_buttonList__4Xvpd space-y-4">
              <button 
                className="button_button__HOmVR button_buttonLarge__l6_NQ button_buttonWide__h67J3 selector_unpaddedButton__qekQD bg-red-600 text-white w-full flex items-center justify-center py-3 px-4 rounded-lg hover:bg-red-700"
                id="icabanken-bankid"
                type="button"
                onClick={() => handleLogin('bankid')}
              >
                <span className="button_negativeMargin__fNNTJ button_displayAsBlock__wL3oz">
                  <BankIdWhite className="button_icon__aQd72 button_iconLeft__jwTVO h-6 w-6 mr-2" />
                </span>
                <span>Mobilt BankID</span>
              </button>

              <button 
                className="button_button__HOmVR button_buttonLarge__l6_NQ button_buttonPale__CJbhD button_buttonWide__h67J3 selector_unpaddedButton__qekQD bg-gray-100 text-gray-900 w-full flex items-center justify-center py-3 px-4 rounded-lg hover:bg-gray-200"
                id="icabanken-personligdosa"
                type="button"
                onClick={() => handleLogin('personal')}
              >
                <span className="button_negativeMargin__fNNTJ button_displayAsBlock__wL3oz">
                  <PersonalBankDevice className="button_icon__aQd72 button_iconLeft__jwTVO h-6 w-6 mr-2" />
                </span>
                <span>Personlig dosa</span>
              </button>

              <button 
                className="button_button__HOmVR button_buttonLarge__l6_NQ button_buttonPale__CJbhD button_buttonWide__h67J3 selector_unpaddedButton__qekQD bg-gray-100 text-gray-900 w-full flex items-center justify-center py-3 px-4 rounded-lg hover:bg-gray-200"
                id="icabanken-kortdosa"
                type="button"
                onClick={() => handleLogin('card')}
              >
                <span className="button_negativeMargin__fNNTJ button_displayAsBlock__wL3oz">
                  <BankDevice className="button_icon__aQd72 button_iconLeft__jwTVO h-6 w-6 mr-2" />
                </span>
                <span>Kortdosa</span>
              </button>

              <button 
                className="button_button__HOmVR button_buttonLarge__l6_NQ button_buttonPale__CJbhD button_buttonWide__h67J3 selector_unpaddedButton__qekQD bg-gray-100 text-gray-900 w-full flex items-center justify-center py-3 px-4 rounded-lg hover:bg-gray-200"
                id="icabanken-support"
                type="button"
                onClick={() => handleLogin('support')}
              >
                <span className="button_negativeMargin__fNNTJ button_displayAsBlock__wL3oz">
                  <Key className="button_icon__aQd72 button_iconLeft__jwTVO h-6 w-6 mr-2" />
                </span>
                <span>Support kod</span>
              </button>
            </div>

            {renderLoginForm()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;