import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardTitle, Col, Row } from 'reactstrap';
import Link from 'next/link';
import { HForm, HField, HButton } from '../../../components/hook-form';
import useForm from 'react-hook-form';
import { validateEmail } from '../../../utils/useFunc';

export default function SignIn() {
  const [state, setstate] = useState(0);
  const [error, setErr] = useState();

  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  const onSubmit = (values) => { };

  const usernameRule = {
    required: true,
    maxLength: { value: 100 },
    validate: (value) => {
      if (!validateEmail(value)) {
        return 'Email invalid';
      }
      return null;
    },
  };

  return (
    <>
      <HForm methods={methods} onSubmit={onSubmit} className="d-flex justify-content-center">
        <FormGroup className="form-row mb-0">
          <Col className="mt-6 mb-3">
            <Row className="w-100 d-inline">
              <Image
                className="pt-2 d-flex justify-content-center"
                src="/images/logigear-logo.png"
                alt="Vercel Logo"
                width={350}
                height={50}
              />
            </Row>
          </Col>

          <Card body className="p-5">
            <CardTitle tag="h2" className="mb-3">
              Sign-In
            </CardTitle>
            <Col>
              <Row className="mb-3">
                <HField name="email" rules={usernameRule} />
              </Row>
              <Row className="mb-3">
                <HField
                  name="password"
                  rules={{
                    required: true,
                  }}
                  inputProps={{
                    type: 'password',
                    placeholder: 'Enter your password',
                  }}
                />
              </Row>
            </Col>
            <Col className="pt-2">
              <HButton color="success">Login</HButton>
            </Col>
          </Card>
        </FormGroup>
      </HForm>
    </>
  );
}
