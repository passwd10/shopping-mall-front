import React, { createContext } from 'react';

const AppContext = createContext() //context 생성

// 1. 상위 컴포넌트 안에서 AppContext.provider 컴포넌트로 user를 전달
const App = () => {
    const user = {
        nickname: '박앤서',
        isAdmin: true,
    }

    return (
        <AppContext.Provider value={user}>
            <div>
                <Main />
            </div>
        </AppContext.Provider>
    )
}

const Main = () => (
    <main>
        <Avatar />
    </main>
)

const Avatar = () => (
    <div>
        <User />
    </div>
)

const User = () => (
    <AppContext.Consumer>
        {user => {
            let label = 'user';
            if (user.isAdmin) {
                label = 'admin';
            }
            return (
                <div>
                    <div>{label}</div>
                    <div>{user.nickname}</div>
                </div>
            )
        }}
    </AppContext.Consumer>
)

export default App;