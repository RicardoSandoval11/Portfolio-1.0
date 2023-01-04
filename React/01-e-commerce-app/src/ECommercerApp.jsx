import { AuthProvider } from "./context/AuthProvider"
import { AppRouter } from "./router/AppRouter"


export const ECommercerApp = () => {
  return (
    <AuthProvider>
      
      <AppRouter/>

    </AuthProvider>
  )
}

