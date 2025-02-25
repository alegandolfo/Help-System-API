import { ErrorObj } from "../../utils/errorObj"

export const UserCreationFailed = new ErrorObj('UCF-001', 'User creation failed', 500)
export const UserViewingFailed = new ErrorObj('UVF-002', 'User viewing failed', 500)
export const UserUpdateFailed = new ErrorObj('UUF-003', 'User update failed', 500)
export const UserDeletionFailed = new ErrorObj('UDF-004', 'User deletion failed', 500)
export const UserNotFound = new ErrorObj('UNF-005', 'User not found', 404)
export const InvalidUserData = new ErrorObj('IUD-006', 'Invalid user data', 400)