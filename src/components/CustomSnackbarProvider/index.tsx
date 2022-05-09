import { SnackbarProvider } from 'notistack'

export default function CustomSnackbarProvider({ children }) {
  return (
    <SnackbarProvider
      autoHideDuration={4000}
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {children}
    </SnackbarProvider>
  )
}
