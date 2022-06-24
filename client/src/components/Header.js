import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = (props) => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item'>
                Streamy
            </Link>
            <div className='right menu'>
                <Link to='/' className='item'>
                    All Streams
                </Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Header);
