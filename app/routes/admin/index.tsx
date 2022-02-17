import React, { useEffect, useRef } from "react";
import { ActionFunction, Form, useActionData, useTransition } from "remix";
import invariant from "tiny-invariant";
import { addPost } from "~/server/post";
import { AppError, CodedError, Res } from "../../util";
import fm from 'front-matter';

export default function Admin() {


    return (
        <main>
            <h1>Admin</h1>
            <Form method="post">

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

                <button type="submit">Login</button>
            </Form>
        </main>
    );
}
