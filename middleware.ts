
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware() {
    // kosong, hanya proteksi auth
  },
  {
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: ["/((?!login|register|api|_next|favicon.ico).*)"],
};
