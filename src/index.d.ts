declare module 'OTPInput' {
    import * as React from 'react';

    export interface OTPInputProps {
        value?: string;
        onChange?: Function;
        otpLength?: number;
        tintColor?: string;
        offTintColor?: string;
        containerStyle?: Object;
        cellStyle?: Object;
        defaultValue?: string;
        editable?: boolean;
    }

    export default class OTPInput extends React.Component<OTPInputProps, any> {
        render(): JSX.Element;
    }
}

