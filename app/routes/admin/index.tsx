import React, { useEffect, useRef } from "react";
import { ActionFunction, Form, useActionData, useTransition } from "remix";
import invariant from "tiny-invariant";
import { addPost } from "~/server/post";
import { AppError, CodedError, Res } from "../../util";
import fm from 'front-matter';

export const action: ActionFunction = async ({request }): Promise<CodedError | null> => {
    const formData = await request.formData();

    const email = formData.get('email');
  invariant(typeof email === 'string')
  const password = formData.get('password');
  invariant(typeof password === 'string')

  

    return null;
}

export default function Admin() {
    const error = useActionData<CodedError>();
    const transition = useTransition();
    const isLoggingIn = transition.state === 'submitting';

    return (
        <main>
            <h1>Admin</h1>
            <Form method="post">
                {error && <p>{error.code}: {error.message}</p>}
                <p>
                    <label htmlFor="email">
                        Email <br /> <input type="email" name="email" required />
                    </label>
                </p>
                <p>
                    <label htmlFor="password">
                        Password <br /> <input type="password" name="password" required />
                    </label>
                </p>

                <button type="submit" disabled={isLoggingIn}>{isLoggingIn ? '...' : 'Login'}</button>
            </Form>
        </main>
    );
}
