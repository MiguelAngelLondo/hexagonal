import { useeId } from "./useId.ts";
import { userName } from "./userName.ts";
import { userEmail } from "./userEmail.ts";
import { userAt } from "./userAt.ts";

export class user {
	id: useeId;
	name: userName;
	email: userEmail;
	createdAt: userAt;

	constructor(
		id: useeId,
		name: userName,
		email: userEmail,
		createdAt: userAt
	) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.createdAt = createdAt;
	}
	public nameAndEmail() {
		return `${this.name} - ${this.email} - ${this.id} - ${this.createdAt}`;
	}
}

//value objects
