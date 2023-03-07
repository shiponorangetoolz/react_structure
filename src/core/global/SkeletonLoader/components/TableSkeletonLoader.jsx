import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const TableSkeletonColumn = ({ width, ...rest }) => {
    return (
        <TableCell {...rest}>
            <Skeleton variant='text' width={100} height={20} />
        </TableCell>
    );
};

const TableSkeletonLoader = ({ columns, numberOfRows }) => {
    return (
        <TableContainer>
            <Table>
                <TableBody>
                    {Array.from({ length: numberOfRows }).map((value, index) => (
                        <TableRow key={index}>
                            {columns.map((column, index) => (
                                <TableSkeletonColumn
                                    width={column.minWidth}
                                    sx={{ minWidth: column.minWidth, padding: "18px 4px" }}
                                    key={index}
                                />
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default TableSkeletonLoader;
