import React from 'react';
import { Stepper, Step, StepLabel, Button, Typography, TextField } from "@material-ui/core";
import { useState } from 'react';
import { useForm, FormProvider, useFormContext, Controller } from "react-hook-form";
const getSteps = () => {
    return [
        "Basic information",
        "Contact infromation",
        "Personal information",
        "Payment information",
    ];
}

const BasicInformation = () => {
    const { control } = useFormContext()
    return (
        <>
            <Controller
                control={control}
                name="firstName"
                render={({ field }) => (
                    <TextField
                        id="first-name"
                        label="First Name"
                        variant="outlined"
                        placeholder="Enter Your First Name"
                        fullWidth
                        margin="normal"
                        name="firstName"
                        {...field}
                    />
                )}
            />

            <TextField
                id="last-name"
                label="Last Name"
                variant="outlined"
                placeholder="Enter Your Last Name"
                fullWidth
                margin="normal"
                name="lastName"
            />
            <TextField
                id="nick-name"
                label="Nick Name"
                variant="outlined"
                placeholder="Enter Your Nick Name"
                fullWidth
                margin="normal"
                name="nickName"
            />
        </>
    )
}
const ContactInformation = () => {
    return (
        <>
            <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                placeholder="Enter Your E-mail Address"
                fullWidth
                margin="normal"
                name="emailAddress"
            />
            <TextField
                id="phone-number"
                label="Phone Number"
                variant="outlined"
                placeholder="Enter Your Phone Number"
                fullWidth
                margin="normal"
                name="phoneNumber"
            />
            <TextField
                id="alternate-phone"
                label="Alternate Phone"
                variant="outlined"
                placeholder="Enter Your Alternate Phone"
                fullWidth
                margin="normal"
                name="alternatePhone"
            />
        </>
    )
}
const PersonalInformation = () => {
    return (
        <>
            <TextField
                id="address1"
                label="Address 1"
                variant="outlined"
                placeholder="Enter Your Address 1"
                fullWidth
                margin="normal"
                name="address1"
            />
            <TextField
                id="address2"
                label="Address 2"
                variant="outlined"
                placeholder="Enter Your Address 2"
                fullWidth
                margin="normal"
                name="address2"
            />
            <TextField
                id="country"
                label="Country"
                variant="outlined"
                placeholder="Enter Your Country Name"
                fullWidth
                margin="normal"
                name="country"
            />
        </>
    )
}
const PaymentInformation = () => {
    return (
        <>
            <TextField
                id="cardNumber"
                label="Card Number"
                variant="outlined"
                placeholder="Enter Your Card Number"
                fullWidth
                margin="normal"
                name="cardNumber"
            />
            <TextField
                id="cardMonth"
                label="Card Month"
                variant="outlined"
                placeholder="Enter Your Card Month"
                fullWidth
                margin="normal"
                name="cardMonth"
            />
            <TextField
                id="cardYear"
                label="Card Year"
                variant="outlined"
                placeholder="Enter Your Card Year"
                fullWidth
                margin="normal"
                name="cardYear"
            />
        </>
    )
}

const getStepsContent = (step) => {
    if (step === 0) {
        return <BasicInformation />
    } else if (step === 1) {
        return <ContactInformation />
    } else if (step === 2) {
        return <PersonalInformation />
    } else if (step === 3) {
        return <PaymentInformation />
    }
}

const StepperMui = () => {
    const [activeStep, setactiveStep] = useState(0);
    const [skippedsteps, setskippedsteps] = useState([]);
    const steps = getSteps();
    const methods = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            nickName: "",
            emailAddress: "",
            phoneNumber: "",
            alternatePhone: "",
            address1: "",
            address2: "",
            country: "",
            cardNumber: "",
            cardMonth: "",
            cardYear: "",
          }
    });
    console.log(methods);

    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    }

    const isStepSkipped = (step) => {
        return skippedsteps.includes(step);
    }

    const handleBack = () => {
        setactiveStep(activeStep - 1);
    }

    const handleNext = (data) => {
        if (activeStep === steps.length - 1) {
            fetch("https://jsonplaceholder.typicode.com/comments")
            .then((data)=> data.json())
            .then((res)=>{
                console.log(res)
                console.log(data)
                setactiveStep(activeStep + 1);   
            })
        } else {
            setskippedsteps(skippedsteps.filter((skippedItem) => skippedItem !== activeStep))
            setactiveStep(activeStep + 1);   
        }
        console.log(data)
    }

    // const onSubmit = (data) => {
    //     console.log(data)
    // }

    const handleskip = () => {
        if (!isStepSkipped(activeStep)) {
            setskippedsteps([...skippedsteps, activeStep]);
        }
        setactiveStep(activeStep + 1);
    }
    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep}>
                {
                    steps.map((step, index) => {
                        const labelProps = {};
                        const stepProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant='caption' style={{ display: 'block' }} align="center">optional</Typography>
                            )
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false
                        }
                        return <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    })
                }
            </Stepper>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleNext)}>
                    {getStepsContent(activeStep)}
                    <Button
                        variant='contained'
                        color="primary"
                        style={{ margin: '0 2px' }}
                        disabled={activeStep === 0}
                        onClick={handleBack}>Back</Button>
                    {
                        isStepOptional(activeStep) && (
                            <Button
                                variant='contained'
                                color="primary"
                                style={{ margin: '0 2px' }}
                                onClick={handleskip}
                            >SKIP</Button>
                        )
                    }
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ margin: '0 2px' }}
                        // onClick={handleNext}
                        type="submit">
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                </form>
            </FormProvider>
            {
                activeStep === steps.length ? (
                    <Typography variant='h3' align="center">Thank You for choosing us</Typography>
                ) : (
                    <>

                    </>
                )
            }

        </div>
    )
}

export default StepperMui;
