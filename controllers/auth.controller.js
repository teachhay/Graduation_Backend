import httpStatus from "http-status";
import { authService, tokenService } from "../services";
import catchAsync from "../utils/catchAsync";

const Login = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    const user = await authService.loginWithEmailAndPassword(email, password);
    const token = tokenService.GenerateToken(user.id);

    res.status(httpStatus.OK).send({ meta: httpStatus.OK, token, user });
});

//TODO register, forget password

export default {
    Login,
}