import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { useEffect } from 'react';
import useStore from '../store';
import supabase from './supaBaseClient';
import ScrollButton from './Components/ScrollUp';

const Root = () => {
  const loc = useLocation();
  const { setSession, setUser } = useStore();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [loc.pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <ScrollButton />
      {
        loc.pathname == '/' ? <Footer /> : <></>
      }
    </>
  )
}

export default Root