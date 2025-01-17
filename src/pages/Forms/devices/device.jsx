import React, { useState } from "react";
import { useAuth } from "../../../store/auth-context";
import Navbar from "../../../components/Navbar/Navbar";
import SideBar from "../../../components/Sidebar/Sidebar";
import { domain, deviceUrl } from "../../../config";
import "./device.css"; // Import the updated CSS

const DEVICE_URL = `http://${domain}${deviceUrl}`;

function DeviceForm() {
    const { authState } = useAuth();
    const [action, setAction] = useState('create');
    const [companyPassword, setCompanyPassword] = useState('');
    const [groupName, setGroupName] = useState('');
    const [deviceName, setDeviceName] = useState('');
    const [deviceType, setDeviceType] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [deviceDescription, setDeviceDescription] = useState('');
    const [telemetryDataSchema, setTelemetryDataSchema] = useState('');

    const [status, setStatus] = useState('');

    const handleActionChange = (event) => {
        setAction(event.target.value); // Change the action
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent form submission from refreshing the page

        try {
            const form = new FormData();
            if (action === 'create') {
                form.append('action', action);
                form.append('company_username', authState.company_username);
                form.append("company_password", companyPassword);
                form.append("group_name", groupName);
                form.append("device_name", deviceName);
                form.append("device_type", deviceType);
                form.append("longitude", longitude);
                form.append("latitude", latitude);
                form.append("device_description", deviceDescription);
                form.append("telemetry_data_schema", telemetryDataSchema);
            } else if (action === 'delete') {
                form.append('action', action);
                form.append('company_username', authState.company_username);
                form.append("group_name", groupName);
                form.append("device_name", deviceName);
                form.append("company_password", companyPassword);
            }

            const response = await fetch(DEVICE_URL, {
                method: 'POST',
                body: form,
            });

            const data = await response.text();
            console.log(data);
            setStatus(data); // Update the status with the response text
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.log(error);
            setStatus("Error occurred while processing the request.");
        }
    };

    if (authState.isLoggedIn) {
        return (
            <div>
                <Navbar />
                <SideBar />
                <div className="main-content">
                    <div className="center-box-group">
                        <h1>{action === 'create' ? 'Create Device' : 'Delete Device'}</h1>
                        <h6>{action === 'create' ? 'Create a new device' : 'Delete an existing device'}</h6>

                        <div className="radio-action">
                            <label>
                                <input
                                    type="radio"
                                    name="action"
                                    value="create"
                                    checked={action === 'create'}
                                    onChange={handleActionChange}
                                /> Create
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="action"
                                    value="delete"
                                    checked={action === 'delete'}
                                    onChange={handleActionChange}
                                /> Delete
                            </label>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="deviceName">Device Name</label>
                                <input
                                    type="text"
                                    id="deviceName"
                                    value={deviceName}
                                    onChange={(e) => setDeviceName(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>

                            {action === 'create' && (
                                <>
                                    <div className="form-group">
                                        <label htmlFor="deviceType">Device Type</label>
                                        <input
                                            type="text"
                                            id="deviceType"
                                            value={deviceType}
                                            onChange={(e) => setDeviceType(e.target.value)}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="deviceDescription">Device Description</label>
                                        <input
                                            type="text"
                                            id="deviceDescription"
                                            value={deviceDescription}
                                            onChange={(e) => setDeviceDescription(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telemetryDataSchema">Telemetry Data Schema</label>
                                        <textarea
                                            id="telemetryDataSchema"
                                            value={telemetryDataSchema}
                                            onChange={(e) => setTelemetryDataSchema(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="longitude">Longitude</label>
                                        <input
                                            type="text"
                                            id="longitude"
                                            value={longitude}
                                            onChange={(e) => setLongitude(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="latitude">Latitude</label>
                                        <input
                                            type="text"
                                            id="latitude"
                                            value={latitude}
                                            onChange={(e) => setLatitude(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                </>
                            )}

                            <div className="form-group">
                                <label htmlFor="groupName">Group Name</label>
                                <input
                                    type="text"
                                    id="groupName"
                                    value={groupName}
                                    onChange={(e) => setGroupName(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="companyPassword">Company Password</label>
                                <input
                                    type="password"
                                    id="companyPassword"
                                    value={companyPassword}
                                    onChange={(e) => setCompanyPassword(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="btn-primary">
                                    {action === 'create' ? 'Create' : 'Delete'}
                                </button>
                            </div>

                            {status && <div className="status-message">{status}</div>}
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}

export default DeviceForm;
