import React from 'react';
import PropTypes from 'prop-types';

export default class Testing extends React.Component {
  render() {
    return ( 
        <section>
          <Headline>Olá Nvoiper !</Headline>

          <Paragraph>
            Nossa aplicação usa 
          </Paragraph>

          <SubHeadlineWithContext>
            Children and Context
          </SubHeadlineWithContext>      
        </section> 
    );
  }
}

// (Functional Sateless Component) Context Consumer

function Headline(props, context) {
  const { coloredTheme } = context;
  return (
    <h1 style={{ color: coloredTheme }}>
      {props.children}
    </h1>
  );
}

Headline.contextTypes = {
  coloredTheme: PropTypes.string
};

// (ES Class Component) Context Consumer

class Paragraph extends React.Component {
  render() {
    const { coloredTheme } = this.context;
    return (
      <p style={{ color: coloredTheme }}>
        {this.props.children}
      </p>
    );
  }
}

Paragraph.contextTypes = {
  coloredTheme: PropTypes.string
};

// HOC as Context Consumer (1)

const getContext = contextTypes => Component => {
  class GetContext extends React.Component {
    render() {
      return <Component { ...this.props } { ...this.context } />
    }
  }

  GetContext.contextTypes = contextTypes;

  return GetContext;
};

// Component using the HOC (1) to consume context

function SubHeadline(props) {
  return (
    <h4 style={{ color: props.coloredTheme }}>
      {props.children}
    </h4>
  );
}

const contextTypes = {
  coloredTheme: PropTypes.string
};

const SubHeadlineWithContext = getContext(contextTypes)(SubHeadline);

// Provider

class ThemeProvider extends React.Component {
  getChildContext() {
    return {
      coloredTheme: this.props.coloredTheme
    };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

ThemeProvider.childContextTypes = {
  coloredTheme: PropTypes.string
};

export {
  ThemeProvider,
};