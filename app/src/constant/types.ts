export interface IUser {
	role: string;
	avatar: string;
	username: string;
	id: number;
}

export interface IPost {
	_id: number;
	title: string;
	tagLine?: string;

	image:
		| {
				name: string;
				type: string;
				path: string;
		  }
		| string;
}
