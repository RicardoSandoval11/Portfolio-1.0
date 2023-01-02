import { useNavigate } from "react-router-dom"


export const LoginPage = () => {

  const navigate = useNavigate();

  const OnLogin = () => {
    navigate("/offers",{
      replace: true
    });
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-6 d-flex flex-wrap justify-content-center">
            <div className="col-12">
              <p className="h1 text-center text-secondary">
                E-Clothes
              </p>
            </div>
            <div className="col-3 d-flex justify-content-center mt-4">
              <button 
                className="btn btn-outline-primary"
                onClick={OnLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
