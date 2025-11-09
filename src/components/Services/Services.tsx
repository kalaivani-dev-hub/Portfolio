import React from "react";
import { servicesData } from "../../data/servicesData";
import "./Services.css";
import SingleService from "./SingleService/SingleService";
import { connect } from "react-redux";

type IServiceProps = Partial<ReturnType<typeof mapStateToProps>>;

function Services(props: IServiceProps) {
  const { theme } = props;
  return (
    <>
      {servicesData.length > 0 && (
        <div
          className="services"
          id="services"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="services-header">
            <h1 style={{ color: theme.primary }}>Services</h1>
          </div>
          <div className="services-body">
            <p style={{ color: theme.tertiary80 }}>
              These are some of the services I offer. Reach out to me if I can
              help you with any!
            </p>
            <div className="services-bodycontainer">
              {servicesData.map((services) => (
                <SingleService
                  key={services.id}
                  id={services.id}
                  title={services.title}
                  icon={services.icon}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  theme: state.rootState.theme,
});

export default connect(mapStateToProps)(Services);
