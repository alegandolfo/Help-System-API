import { ErrorObj } from "../../utils/errorObj"

export const UserCreationFailed = new ErrorObj('UCF-001', 'User creation failed', 500)
export const UserViewingFailed = new ErrorObj('UVF-002', 'User viewing failed', 500)
export const UserUpdateFailed = new ErrorObj('UUF-003', 'User update failed', 500)
export const UserDeletionFailed = new ErrorObj('UDF-004', 'User deletion failed', 500)
export const UserNotFound = new ErrorObj('UNF-005', 'User not found', 404)
export const InvalidUserData = new ErrorObj('IUD-006', 'Invalid user data', 400)
export const IncorrectUserCredentials = new ErrorObj('IUC-007', 'Incorrect user credentials', 401)
export const UserLoginFailed = new ErrorObj('ULF-008', 'User login failed', 500)

export const PostCreationFailed = new ErrorObj('PCF-101', 'Post creation failed', 500)
export const PostViewingFailed = new ErrorObj('PVF-102', 'Post viewing failed', 500)
export const PostUpdateFailed = new ErrorObj('PUF-103', 'Post update failed', 500)
export const PostDeletionFailed = new ErrorObj('PDF-104', 'Post deletion failed', 500)
export const PostNotFound = new ErrorObj('PNF-105', 'Post not found', 404)
export const InvalidPostData = new ErrorObj('IPD-106', 'Invalid post data', 400)

export const ReplyCreationFailed = new ErrorObj('RCF-201', 'Reply creation failed', 500)
export const ReplyViewingFailed = new ErrorObj('RVF-202', 'Reply viewing failed', 500)
export const ReplyUpdateFailed = new ErrorObj('RUF-203', 'Reply update failed', 500)
export const ReplyDeletionFailed = new ErrorObj('RDF-204', 'Reply deletion failed', 500)
export const ReplyNotFound = new ErrorObj('RNF-205', 'Reply not found', 404)
export const InvalidReplyData = new ErrorObj('IRD-206', 'Invalid reply data', 400)