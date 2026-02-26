import { LogIn, LogOut, PlusCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Header({ user }) {
    const handleLogout = async () => {
        await supabase.auth.signOut()
        window.location.reload()
    }

    return (
        <header>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="logo">chocoMel</div>
            </Link>

            <div className="actions" style={{ display: 'flex', gap: '10px' }}>
                {user ? (
                    <>
                        <Link to="/upload" className="login-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <PlusCircle size={18} /> Yeni Ekle
                        </Link>
                        <button className="login-btn" onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <LogOut size={18} /> Çıkış
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="login-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <LogIn size={18} /> Giriş Yap
                    </Link>
                )}
            </div>
        </header>
    )
}
