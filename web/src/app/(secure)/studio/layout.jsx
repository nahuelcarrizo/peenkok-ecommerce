


// import { auth } from '_helpers/server';
// import { Alert } from '_components';

export const metadata = {
    title: 'Peenkok | Studio',
};

export default Layout;

function Layout({ children }) {


    return (
        <>
            <div >
                {children}
            </div>
        </>
    );
}