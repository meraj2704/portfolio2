"use client"

import store from '@/redux/Store/store';
import React from 'react';
import { Provider } from 'react-redux';

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        // this is provider which is set for the use redux store
        <Provider store={store}>{children}</Provider>
    );
};

export default ReduxProvider;