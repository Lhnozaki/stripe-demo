import React, { Component } from "react";
import styles from "./Header.module.scss";

export default class Header extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Blurange</h1>
        </div>
        <div className={styles.test}>
          <h3>test</h3>
        </div>
      </div>
    );
  }
}
