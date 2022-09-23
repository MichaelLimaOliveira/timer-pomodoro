import { HandPalm, Play } from "phosphor-react";
import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    HomeContainer,
    StopCountdownButton,
    StartCountdownButton,
} from "./styles";

import { Countdown } from "./components/Countdown";
import { NewCycleForm } from "./components/FormContainer";
import { CycleContext } from "../../contexts/CyclesContext";
import { useContext } from "react";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutesAmount: zod
        .number()
        .min(5, "O ciclo precisa ser no mínimo de 5 minutos")
        .max(60, "O ciclo precisa ser no máximo de 60 minutos"),
});

type newCycleFromData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
    const { activeCycle, createNewCycle, interruptCurrentCycle } =
        useContext(CycleContext);
    const newCycleForm = useForm<newCycleFromData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: "",
            minutesAmount: 0,
        },
    });

    const { handleSubmit, watch, reset } = newCycleForm;
    const task = watch("task");
    const isSubmitDisabled = !task;

    function handleCreatedNewCycle(data: newCycleFromData) {
        createNewCycle(data);

        reset();
    }

    return (
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handleCreatedNewCycle)}>
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <Countdown />

                {activeCycle ? (
                    <StopCountdownButton
                        onClick={interruptCurrentCycle}
                        type="button"
                    >
                        <HandPalm size={24} />
                        Interromper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton
                        disabled={isSubmitDisabled}
                        type="submit"
                    >
                        <Play size={24} />
                        Começar
                    </StartCountdownButton>
                )}
            </form>
        </HomeContainer>
    );
}
